const axios = require('axios');
var users;
var vaild=false;
var resp;

async function validate(email,uname){
    let res = await axios.get('https://jsonplaceholder.typicode.com/users?_start=1&_limit=5');
    users = res.data;

    for(var i=0 ;i<users.length;i++){
        if(users[i].email == email && users[i].username == uname){
            vaild=true;
            break;
        }
        else (users[i].email != email || users[i].username != uname)
            vaild=false;
    }

    if(vaild){
        console.log("VALID USER");
        resp={vaild:'true'};
        return resp;
    }
    else{
        console.log("INVALID USER");
        resp={vaild:'false'};
        return resp;
    }
}

module.exports={
    validate
}