

function performPostRequest(e) {
    axios.post('https://jsonplaceholder.typicode.com/users', {
      
    })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
      
    });
    
    e.preventDefault();
  }
  