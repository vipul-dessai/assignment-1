
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
loginRouter.post('/', function (req, res, next) {


  axios.post('http://localhost:3000/validation/validate', qs.stringify({
    uname: req.body.userName,
    email: req.body.emailId
  }), {

    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',




    }


  })

    .then(function (response) {

      if (response.data.success) {
        console.log(response.data);

        indexController.renderDashboard(req, res, next);
       



      }
      else {
        indexController.renderLogin(req, res, next);

      }
    });
});



module.exports = loginRouter;