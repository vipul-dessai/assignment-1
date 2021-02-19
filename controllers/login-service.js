const axios = require('axios');

async function validate(email,uname){
    let users;
    let valid=false;
    let res = await axios.get('https://jsonplaceholder.typicode.com/users?_start=1&_limit=5');
    users = res.data;

    for(let i=0 ;i<users.length;i++){
        if(users[i].email == email && users[i].username == uname){
            valid=true;
            break;
        }
        else (users[i].email != email || users[i].username != uname)
            valid=false;
    }
    return valid;
    
}

module.exports={
    validate
}