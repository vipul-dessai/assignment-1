const { default: axios } = require('axios');
const express = require('express');
const path = require('path');
const loginRouter = express.Router();

const ax = require('axios');
const login_obj = require('../controllers/login-controller');
const bodyPaObj=require('body-parser');


loginRouter.use(bodyPaObj.json({extended:true}));
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const indexController = require('../controllers/index');


 

loginRouter.get('/', function (req, res, next) {
    indexController.renderLogin(req, res, next);
});


    //indexController.renderLogin(req, res, next);
   /* async function makeGetRequest(){
   let userInfo= { username: "Antonette", email: "Shanna@melissa.tv" };
    let abc= await ax.post('/login',userInfo) ;
    
    let data=abc.data;
    console.log(data);

    
}
makeGetRequest();
   // var responce=login_obj.validate(uname,uemail)
   // .then((response) => {
     //   console.log(response);
     // }, (error) => {
     //   console.log(error);
    //  });*/
  
    
 loginRouter.post('/',function(req,res){
  data={};
  data.usermail = req.body.emailId;
  data.uname  = req.body.userName;
 
 
  console.log(data);
 
  var json = JSON.stringify(data);
 var xhr = new XMLHttpRequest();
xhr.open("POST", "/login");
 xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
 xhr.onload = function () {
   var users = JSON.parse(xhr.responseText);
   if (xhr.readyState == 4 && xhr.status == "201") {
     console.log(users);
     
   } else {
     console.error(users);
   }
 }
 xhr.send(json);
    console.log(json);
  });


  

  


module.exports = loginRouter;