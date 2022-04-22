export function getUsers(page = 1) {
    return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
        .then(res => { 
            return res.json(); 
        }) 
        .then(data => { 
            return data;
        })
        .catch(err => {
            console.err(err);
        });
}

export function getPositions() {
    return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            console.error(err);
        })
}

export function getToken() {
    return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
        .then(res => {
            return res.json();
        })
        .then(json => {
            return json.token;
        })
        .catch(err => {
            console.error(err);
        });
}

export function postUser(token, user) {
    return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', 
        { method: 'POST', body: user, headers: { 'Token': token  }})
        .then(res => {
            res.json();
        })
        .catch(err => {
            console.error(err);
        });
}