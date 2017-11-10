const jwt = require('jsonwebtoken');
const User = require('./models/User');
const io = require('socket.io')(5000);
require('dotenv').config();

io.on('connection', function(socket) {

  let token = socket.handshake.query.token;

  socket.on('refresh token', function (token) {

    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
      if (decoded) {
        let currentTime = Math.floor(Date.now() / 1000);
        if (decoded.exp - currentTime <= 10) {
          let user = new User();
          let token = user.signJwt(decoded.user_id);
          io.to(socket.id).emit('refresh token', token);
        }
      } else {
        io.to(socket.id).emit('destroy token');
      }

    });

  });

});