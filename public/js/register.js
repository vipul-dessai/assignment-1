const express = require('express');


//body parser
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.post("/",function(req,res){
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

