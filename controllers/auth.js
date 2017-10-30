const jwt  = require('jsonwebtoken');
const User = require('../models/User');

module.exports = function (router) {

  // register
  router.post('/register', function (req, res, next) {

    req.check('username', 'username khong duoc de trong').notEmpty();
    req.check('password', 'password khong duoc de trong').notEmpty();
    req.check('passwordConfirmation', 'passwordConfirmation khong duoc de trong').notEmpty();
    req.check('password', 'password khong trung khop').custom(value => {return value == req.body.passwordConfirmation});

    User.findOne({username: req.body.username}, function (err, user) {

      if (user) req.check('username', 'username da ton tai').custom(value => {return false});
      let errors = req.validationErrors();
      if (errors) return res.status(422).json(errors);
      return next();
      
    });

  }, function (req, res) {

      let user = new User();
      user.username = req.body.username;
      user.password = req.body.password;
      user.save(function (err, user) {
        if (user) {
          let token = jwt.sign({user: user}, process.env.JWT_SECRET_KEY, {expiresIn: 60*60});
          return res.status(200).json({token: token});
        } else {
          return res.status(401).json([{msg: 'dang ky that bai'}]);
        }
      });

  });

  // login
  router.post('/login', function (req, res, next) {

    req.check('username', 'username khong duoc de trong').notEmpty();
    req.check('password', 'password khong duoc de trong').notEmpty();

    let errors = req.validationErrors();
    if (errors) return res.status(422).json(errors);
    return next();

  }, function (req, res) {

    User.findOne({username: req.body.username, password: req.body.password}, function (err, user) {

      if (user) {
        let token = jwt.sign({user: user}, process.env.JWT_SECRET_KEY, {expiresIn: 60*60});
        return res.status(200).json({token: token});
      } else {
        return res.status(401).json([{msg: 'dang nhap that bai'}]);
      }

    });    

  });
  
}