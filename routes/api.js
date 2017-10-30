var express = require('express');
var router = express.Router();

require('../controllers/auth')(router);

module.exports = router;
