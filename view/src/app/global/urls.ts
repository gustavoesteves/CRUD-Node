import { HttpHeaders } from '@angular/common/http';

export const HttpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
};

// Developer
const deployUrl = 'http://localhost:3000/';

// Todo
const todoAPI = 'api/todo';
export const todoGet = deployUrl + todoAPI;