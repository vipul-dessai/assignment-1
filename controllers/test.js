const user = require('./login-controller');
var email = "Julianne.OConner@kory.org";
var userName = "Karianne";

 

user.validate(email,userName)
.then(function(resp){
   console.log(resp);
})