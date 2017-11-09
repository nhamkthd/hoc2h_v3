const jwt = require('jsonwebtoken');
const User = require('./models/User');

module.exports = function (server) {

  const io = require('socket.io')(server);

  io.on('connection', function(socket) {

    console.log('user connected');

    socket.on('refresh token', function (token) {

      if (token) {

        jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {

          if (decoded) {
            let user = new User();
            let token = user.signJwt(decoded.user_id);
            io.to(socket.id).emit('refresh token', token);
          }

        });

      }

    });

  });

}