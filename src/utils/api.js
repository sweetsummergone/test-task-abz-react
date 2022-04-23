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

export function postUser(user) {
    return getToken()
        .then(res => {
            return res;
        })
        .then(token => {
            let userForm = new FormData();
            userForm.append("position_id", user.position); // Temponary to check POST query
            userForm.append("name", user.name);
            userForm.append("email", user.email);
            userForm.append("phone", user.phone);
            userForm.append("photo", user.avatar);
            return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', 
                { 
                    method: 'POST', 
                    body: userForm, 
                    headers: { 'Token': token  }
                });
        })
        .then(res => {
            return res.json();
        })
        .catch(err => {
            console.error(err);
        });
}