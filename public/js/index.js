

/*document.getElementById("formdata").onsubmit=
 
  axios.post('/validation/validate', ({
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
     window.location.assign('dasboard.hjs');
    }
    else {
     window.location.assign('/');
    }
  })
*/




document.getElementById("formdata").onsubmit = (e) => {
  e.preventDefault();
  var uname = document.getElementById("userName").value;
  var email = document.getElementById("emailId").value;
  console.log(uname, email);
  axios.post('/validation/validate',{  uname,  email }, {
   headers: {
      'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8',
    }
   })
    .then(function (response) {

      if (response.data.success) {
        console.log(response.data);
        window.location.assign('dasboard.hjs');
      }
      else {
        window.location.assign('/');
      }
    });
  }