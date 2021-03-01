const express = require('express');
const postsRouter = express.Router();

const indexController = require('../controllers/index');

postsRouter.get('/', function (req, res, next) {
    indexController.renderPosts(req, res, next);
});

module.exports = postsRouter;