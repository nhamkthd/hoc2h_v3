const express = require('express');
const router = express.Router();

require('../controllers/auth')(router);

module.exports = router;
