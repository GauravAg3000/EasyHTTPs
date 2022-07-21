//This is our easyhttp library using async and await

class EasyHttp {
    async get(url) {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            return `Error: ${response.status}`;
        }
    }

    async post(url, _data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(_data)
        });

        const data = response.json();

        if (response.ok) {
            return data;
        } else {
            return `Error: ${response.status}`;
        }
    }

    async put(url, _data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(_data)
        })
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            return `Error: ${response.status}`;
        }
    }

    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            return `Post Deleted`;
        } else {
            return `Error: ${response.status}`;
        }
    }
}