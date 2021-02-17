const express = require('express');
const path = require('path')
const registerRouter = express.Router();
const axios= require('axios');

//body parser
const bodyParser = require('body-parser');
registerRouter.use(bodyParser.urlencoded({extended:true}));
registerRouter.use(express.json());


const indexController = require('../controllers/index');
const registrationController = require('../controllers/registration-controller');

var flag="notset";


registerRouter.get('/', function (req, res, next) {
    indexController.renderRegister(req, res, next);
});


registerRouter.post('/', function (req, res, next) {
    //indexController.renderRegister(req, res, next);
    //console.log("Welcome User1 "+req.body.email);
    
    axios.post('https://jsonplaceholder.typicode.com/users', {
        //body parser
        name : req.body.name,
        email: req.body.email
    })
    .then(function (response) {
        if(response.status == 201){
            console.log(response);
            console.log('user registered Successfully !');
            //link to dashboard
            
             flag ="set";
             console.log("flag value ="+flag);
        }else{
            console.log('user registration failed');
             flag ="notset";

             console.log("flag value ="+flag);
        }

        
        if(flag=="set"){
            //res.redirect("/");
            indexController.renderDashboard(req, res, next);
            console.log('Flag is set ');
        }else{
            //res.redirect("/login");
            indexController.renderLogin(req, res, next);
            console.log('Flag is not set ');
        
        }
    })
    .catch(function (error) {
      
});


});


module.exports = registerRouter;