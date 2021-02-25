
const express = require('express');
const loginRouter = express.Router();
const axios = require('axios');
const qs = require('qs');
const bodyPaObj = require('body-parser');
loginRouter.use(bodyPaObj.urlencoded({ extended: true }));
const indexController = require('../controllers/index');


loginRouter.get('/', function (req, res, next) {

  indexController.renderLogin(req, res, next);

});

//posting the data
loginRouter.post('public/js/index.js', function (req, res, next) {
  
});



module.exports = loginRouter;