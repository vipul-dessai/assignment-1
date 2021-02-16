const express = require('express');
const path = require('path')
const registerRouter = express.Router();

const indexController = require('../controllers/index');
const registrationController = require('../controllers/registration-controller');

registerRouter.get('/', function (req, res, next) {
    indexController.renderRegister(req, res, next);
});

module.exports = registerRouter;