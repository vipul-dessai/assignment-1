const express = require('express');
const registrationcontroller= require('../controllers/registration-controller');

const path = require('path');
const router = express.Router();

const login = require('../routes/login');
const cart = require('../routes/cart');
const register = require('../routes/register');

const indexController = require('../controllers/index');

router.use('/login', login);
router.use('/cart', cart);
router.use('/register', register);

router.get('/', function (req, res, next) {
    indexController.renderDashboard(req, res, next);
});

module.exports = router;