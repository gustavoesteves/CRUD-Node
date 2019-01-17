import { Component, OnInit } from '@angular/core';
import { ITask } from "../task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: ITask[] = [];

  constructor() { }

  ngOnInit() {
    this.tasks.push(
      { idTodo: 'a', title: 'task 1', start: new Date },
      { idTodo: 'b', title: 'task 2', start: new Date },
      { idTodo: 'c', title: 'task 3', start: new Date },
      { idTodo: 'd', title: 'task 4', start: new Date },
      { idTodo: 'e', title: 'task 5', start: new Date }
    );
  }

}
