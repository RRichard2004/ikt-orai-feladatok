document.getElementById('login').onclick=function()
{
    var xhr=new XMLHttpRequest;
    var url="https://reqres.in/api/login";
    var body=JSON.stringify ({
        email:'eve.holt@reqres.in',
        password:'barmi'    
    })
    sendRequest(url, 'POST', body, function(token){
        console.log(token);
        sendRequest('https://reqres.in/api/users','GET', null, function(users)
        {
            console.log(users);
        })
     })
};

function sendRequest(url, method, body, callback){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState== 4 && xhr.status ==200){
            callback(JSON.parse(xhr.responseText))
        }
    };
    xhr.open(method, url)
    xhr.setRequestHeader('content-type', 'application/json');
    
    xhr.send(body);
}