const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = function (router) {

  // register
  router.post('/auth/register', function (req, res, next) {

    req.check('username', 'username khong duoc de trong').notEmpty();
    req.check('password', 'password khong duoc de trong').notEmpty();
    req.check('passwordConfirmation', 'passwordConfirmation khong duoc de trong').notEmpty();
    req.check('password', 'password khong trung khop').custom(value => {
      return value == req.body.passwordConfirmation;
    });

    User.findOne({
      username: req.body.username
    }, function (err, user) {

      if (user) req.check('username', 'username da ton tai').custom(value => {
        return false
      });
      let errors = req.validationErrors();
      if (errors) return res.status(422).json(errors);
      return next();

    });

  }, function (req, res) {

    let user = new User();
    user.username = req.body.username;
    user.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    user.role = 2;
    user.save(function (err, user) {
      if (user) {
        let token = jwt.sign({
          user: user
        }, process.env.JWT_SECRET_KEY, {
          expiresIn: 60 * 60
        });
        return res.status(200).json({
          token: token,
          user: user
        });
      } else {
        return res.status(401).json([{
          msg: 'dang ky that bai'
        }]);
      }
    });

  });

  // login
  router.post('/auth/login', function (req, res, next) {

    req.check('username', 'username khong duoc de trong').notEmpty();
    req.check('password', 'password khong duoc de trong').notEmpty();

    let errors = req.validationErrors();
    if (errors) return res.status(422).json(errors);
    return next();

  }, function (req, res) {

    User.findOne({
      username: req.body.username
    }, function (err, user) {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign({
            user: user
          }, process.env.JWT_SECRET_KEY, {
            expiresIn: 60 * 60
          });
          return res.status(200).json({
            token: token,
            user: user
          });
        } else {
          return res.status(401).json([{
            msg: 'dang nhap that bai'
          }]);
        }
      } else {
        return res.status(401).json([{
          msg: 'username khong ton tai'
        }]);
      }
    });

  });

  // set user admin
  router.get('/auth/set-admin', function (req, res) {

    User.remove(function (err) {
      if (!err) {
        let user = new User();
        user.username = 'admin';
        user.password = bcrypt.hashSync('1', bcrypt.genSaltSync(10));
        user.role = 1;
        user.save(function (err, user) {

          if (user) return res.status(200).json({
            message: 'set user admin success'
          });
          return res.status(500).json({
            message: 'set user admin error'
          });

        });
      }
    });

  });

}