const jwt = require('jsonwebtoken');
const User = require('./models/User');

module.exports = function (server) {

  const io = require('socket.io')(server);

  io.on('connection', function(socket) {

    socket.on('refresh token', function (token) {

      if (token) {

        jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {

          if (decoded && decoded.exp - (Date.parse(Date()) / 1000) <= 5) {
            let user = new User();
            let token = user.signJwt(decoded.user_id);
            io.to(socket.id).emit('refresh token', token);
          }

          if (err) {
            io.to(socket.id).emit('destroy token');
          }

        });

      } else {
        io.to(socket.id).emit('destroy token');
      }

    });

  });

}