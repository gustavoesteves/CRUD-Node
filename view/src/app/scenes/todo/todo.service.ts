import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { ITodo } from "./todo";
import { todoGet, todoPost } from "../../global/urls";
import { BodyEncode, HttpOptions } from "../../global/utils";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos = new BehaviorSubject<ITodo[]>([]);
  currentTodos = this.todos.asObservable();

  constructor(private http: HttpClient) { }

/**
 * Local methods
 */
  pushTodosInit(todo: ITodo[]) {
    this.todos.next(todo);
  }

  pushTodos(todo: ITodo) {
    const newTodo = this.todos.value;
    newTodo.push(todo);
    this.todos.next(newTodo);
  }

  /**
   * Http methods
   */
  getTodo(): Observable<ITodo[] | any> {
    return this.http.get<ITodo[]>(todoGet, HttpOptions)
      .pipe(
        catchError(err => { return of([]) })
      );
  }

  postTodo(todo: ITodo): Observable<ITodo | any> {
    return this.http.post<ITodo>(todoPost, BodyEncode<ITodo>(todo), HttpOptions)
      .pipe(
        catchError(err => { return of([]) })
      );
  }
}