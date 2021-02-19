const { default: axios } = require('axios');
const express = require('express');
const path = require('path');
const loginRouter = express.Router();
const indexController = require('../controllers/index');
 
loginRouter.get('/', function (req, res, next) {
    indexController.renderLogin(req, res, next);
});

module.exports = loginRouter;