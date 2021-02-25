const express = require('express');
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

router.post("/", function (req, res) {
    axios.post('https://jsonplaceholder.typicode.com/users', {
        name: req.body.name
    })
        .then(function (response) {
            res.send("Welcome User1 " + req.body.name);
        })
        .catch(function (error) {

        });
});

module.exports = router;