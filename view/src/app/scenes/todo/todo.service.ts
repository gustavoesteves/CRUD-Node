import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { ITodo } from "./todo";
import { HttpOptions, todoGet } from "../../global/urls";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  /**
   * Methods
   */
  getTodo(): Observable<ITodo[] | any> {
    console.log('passou no service');
    return this.http.get<ITodo[]>(todoGet, HttpOptions)
      .pipe(
        catchError(err => {
          console.log('deu foi erro....');
          console.log(err);
          return of([]);
        })
      );
  }
}