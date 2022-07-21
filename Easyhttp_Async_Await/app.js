const http = new EasyHttp();

//------GET Request------
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));

//New User
const data = {
    'name': 'Joe Goldberg',
    'username': 'Will Bettelheim'
};

//-------POST Request----------
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//-------PUT Request----------    
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//-------DELETE Request----------
http.delete('https://jsonplaceholder.typicode.com/users/9')
    .then(data => console.log(data))
    .catch(err => console.log(err));

