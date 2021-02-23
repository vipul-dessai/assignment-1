const express = require('express');
const path = require('path')
const registerRouter = express.Router();
const axios= require('axios');

//body parser
const bodyParser = require('body-parser');
registerRouter.use(bodyParser.urlencoded({extended:true}));
registerRouter.use(express.json());

const indexController = require('../controllers/index');

registerRouter.get('/', function (req, res, next) {
    indexController.renderRegister(req, res, next);
});

registerRouter.post('/', function (req, res, next) {   
    axios.post('https://jsonplaceholder.typicode.com/users', {
        //body parser
        name : req.body.name,
        email: req.body.email
    })
    .then(function (response) {
        if(response.status == 201){
             indexController.renderDashboard(req, res, next);
        }else{
            indexController.renderLogin(req, res, next);
        }
    })
    .catch(function (error) {});
});
module.exports = registerRouter;