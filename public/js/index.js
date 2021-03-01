document.getElementById("formdata").onsubmit = (e) => {
  e.preventDefault();
  var uname = document.getElementById("userName").value;
  var email = document.getElementById("emailId").value;

  axios.post(
    '/login/validate', 
    { uname, email }
  )
  .then(function (response) {
    if (response.data.success) {
      window.location = "/";
    }
    else {
      alert("Incorrect username or password");
    }
  });
}