const User = require('../models/User');

module.exports = function (router) {

  // register
  router.post('/auth/register', function (req, res, next) {

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
    user.password = user.hashSync(req.body.password);
    user.role = 2;
    user.save(function (err, user) {

      if (user) {
        let token = user.signJwt(user.id);
        return res.status(200).json({token: token, user: user});
      }

      return res.status(401).json('dang ky that bai');

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

    User.findOne({username: req.body.username}, function (err, user) {

      if (user) {
        if (user.compareSync(req.body.password)) {
          let token = user.signJwt(user.id);
          return res.status(200).json({token: token, user: user});
        } else {
          return res.status(401).json('dang nhap that bai');
        }
      } else {
        return res.status(401).json('username khong ton tai');
      }

    });

  });

  // admin login
  router.post('/auth/admin/login', function (req, res, next) {

    req.check('username', 'username khong duoc phep de trong').notEmpty();
    req.check('password', 'password khong duoc phep de trong').notEmpty();

    let errors = req.validationErrors();
    if (errors) return res.status(422).json(errors);
    return next();

  }, function (req, res) {

    User.findOne({username: req.body.username}, function (err, user) {

      if (err) return res.status(500).json(err);
      if (user) {

        if (user.role != 1 || ! user.compareSync(req.body.password)) return res.status(401).json('dang nhap that bai');
        let token = user.signJwt(user.id);
        return res.status(200).json({token: token, user: user});

      }

      return res.status(401).json('dang nhap that bai');

    });

  });

  // set user admin
  router.get('/auth/set-admin', function (req, res) {

    User.findOne({username: 'admin'}, function (err, user) {

      if (! user) {

        let user = new User();
        user.username = 'admin';
        user.password = user.hashSync('1');
        user.role = 1;
        user.save(function (err, user) {

          if (user) return res.status(200).json('set user admin success');
          return res.status(401).json('set user admin error');

        });

      }

      return res.status(401).json('user admin da ton tai');

    });

  });

}