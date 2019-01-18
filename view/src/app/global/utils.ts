import { HttpHeaders } from '@angular/common/http';

export const HttpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
};

export function BodyEncode<T>(values: T): string {
    return Object.keys(values)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(values[key]))
        .join('&');
}