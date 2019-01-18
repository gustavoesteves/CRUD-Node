import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { ITask } from "./task";
import { taskGet, taskPost } from "../../global/urls";
import { BodyEncode, HttpOptions } from "../../global/utils";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private idTodo = new BehaviorSubject<string>('');
  currentTodo = this.idTodo.asObservable();

  private tasks = new BehaviorSubject<ITask[]>([]);
  currentTasks = this.tasks.asObservable();

  constructor(private http: HttpClient) { }

  /**
   * Local methods
   */
  setIdTodo(id: string) {
    this.idTodo.next(id);
  }

  pushTasksInit(task: ITask[]) {
    this.tasks.next(task);
  }

  pushTask(task: ITask) {
    const newTask = this.tasks.value;
    newTask.push(task);
    this.tasks.next(newTask);
  }

  /**
   * Http methods
   */
  getTask(): Observable<ITask[] | any> {
    return this.http.get<ITask[]>(taskGet + '/' + this.idTodo.value, HttpOptions)
      .pipe(
        catchError(err => { return of([]) })
      );
  }

  postTask(task: ITask): Observable<ITask | any> {
    return this.http.post(taskPost + '/' + this.idTodo.value, BodyEncode<ITask>(task), HttpOptions)
      .pipe(
        catchError(err => { return of([]) })
      );
  }
}
