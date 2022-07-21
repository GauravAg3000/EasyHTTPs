//For testing and debugging

const http = new EasyHTTP();

//Calling get function and passing the url and a callback function that will display posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });


//Calling post function and passing the url, the data to add and a callback function that will display posts
const data = {
    title: "New Post",
    body: "This is the new post"
};

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
    // if(err){
    //     console.log(err);
    // } else {
    //     console.log(posts);
    // }
// });


//Calling put function and passing the url, the updated data and a callback function that will display posts
// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


//Calling delete function and passing the url, the updated data and a callback function that will display posts
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});

