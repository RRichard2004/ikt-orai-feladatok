document.getElementById('fetch-posts').onclick = function(){
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange=function() {   
        if(xhr.readyState==4 && xhr.status == 200)
        {
            var posts = JSON.parse(xhr.responseText);
            var postListHtml='';

            for(var post of posts)
                postListHtml += '<p>' + post.userId + '</p> <p>' + post.title + '</p> <small>' + post.body + '</small><br><br><br>';  
            };
            
            document.getElementById('post-list-container').innerHTML = postListHtml;



        }
xhr.open('GET','http://jsonplaceholder.typicode.com/posts');

xhr.send();

}