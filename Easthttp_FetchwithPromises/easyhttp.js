//This is our easyhttp library using fetch and promises

class EasyHttp {
    get(url) {
        return new Promise((resolve,reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
    }

    post(url,_data) {
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'POST',
                headers: {
                   'Content-Type':'application/json',
                   'Accept':'application/json'
                },
                body: JSON.stringify(_data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
    }

    put(url,_data) {
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'PUT',
                headers: {
                   'Content-Type':'application/json',
                   'Accept':'application/json'
                },
                body: JSON.stringify(_data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
    }

    delete(url) {
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(() => resolve('Post deleted'))
                .catch(err => reject(err))
        });
    }
}