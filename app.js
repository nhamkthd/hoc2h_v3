const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const validator = require('express-validator');
const compression = require('compression');

const app = express();

require('dotenv').config();
mongoose.connect(process.env.DB_HOST, { useMongoClient: true });
app.use(compression());
app.use(validator());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(cors());

app.use('/api', require('./routes/api'));

app.get('*', function (req, res) {
  res.sendFile('index.html', { root: __dirname + '/client/dist' });
});

module.exports = app;
