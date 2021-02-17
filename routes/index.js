const express = require('express');
const registrationcontroller= require('../controllers/registration-controller');

const path = require('path');
const router = express.Router();

const login = require('../routes/login');
const cart = require('../routes/cart');
const register = require('../routes/register');

const indexController = require('../controllers/index');


//body parser
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));


router.use('/login', login);
router.use('/cart', cart);
router.use('/register', register);

router.get('/', function (req, res, next) {
    indexController.renderDashboard(req, res, next);
});


router.post("/",function(req,res){
    console.log(req.body);
    res.send("Welcome User1 "+req.body.name);
    axios.post('https://jsonplaceholder.typicode.com/users', {
      
    })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
      
    });
    
    

});

module.exports = router;