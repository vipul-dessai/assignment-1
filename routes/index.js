const express = require('express');
const router = express.Router();

const login = require('../routes/login');
const cart = require('../routes/cart');

const indexController = require('../controllers/index');

router.use('/login', login);
router.use('/cart', cart);

router.get('/', function (req, res, next) {
    indexController.renderDashboard(req, res, next);
});

module.exports = router;