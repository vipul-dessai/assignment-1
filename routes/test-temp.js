const express = require('express');
const path = require('path');
const TestRouter = express.Router();

const indexController = require('../controllers/index');

TestRouter.get('/', function (req, res, next) {
    indexController.renderTest(req, res, next);
});

module.exports = TestRouter;