document.getElementById("login").onsubmit=function(event){
    event.preventDefault();
    var email = event.target.elements.email.value;
    var password = event.target.elements.password.value;
    var body = JSON.stringify({
        email: email,
        password: password
    })

fetch('https://reqres.in/api/login/',{
        method: 'POST',
        body: body,
        Headers: {
        'Content-type':'application/json'
    }
    })
    .then(function(response){
        if (!response.ok) {
            return Promise.reject()
        }
    console.log(response.JSON)
    })
    .then(function(response){
        return fetch('https://reqres.in/api/users')
    })    
    .then(function(response){
        if (!response.ok) {
            return Promise.reject()
        }
    console.log(response.JSON)
    })
    .then(function(userPage) {
        console.log(userPage)
    })
    .catch(function(error){
        console.error(error)
    })
}