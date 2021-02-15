const express = require('express');
const path = require('path');
const router = express.Router();

const login = require('../routes/login');
const cart = require('../routes/cart');
const test = require('../routes/test-temp');

const indexController = require('../controllers/index');

router.use('/login', login);
router.use('/cart', cart);
router.use('/test-tep', test);

router.get('/', function (req, res, next) {
    indexController.renderDashboard(req, res, next);
});

module.exports = router;