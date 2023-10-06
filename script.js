document.getElementById("login").onsubmit=function(event){
    event.preventDefault();
    var email = event.target.elements.email.value;
    var password = event.target.elements.password.value;
    var body = JSON.stringify({
        email: email,
        password: password
    })

console.log(body)
fetch('https://reqres.in/api/login',{
        method: 'POST',
        body: body,
        Headers: {
        'Content-type':'application/json'
    }
    })
    .then(function(response){
    console.log(response)
    })
}