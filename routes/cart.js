const express = require('express');
const path = require('path')
const cartRouter = express.Router();

const indexController = require('../controllers/index');

cartRouter.get('/', function (req, res, next) {
    indexController.renderCart(req, res, next);
});

module.exports = cartRouter;