import { Component, OnInit } from '@angular/core';

import { TaskService } from "../task.service";
import { ITask } from "../task";

@Component({
  selector: 'app-task-crud',
  templateUrl: './task-crud.component.html',
  styleUrls: ['./task-crud.component.css']
})
export class TaskCrudComponent implements OnInit {
  taskTitle: string;
  taskMessage: string;

  constructor(private taskService: TaskService) { }

  ngOnInit() { }

  postTask(title: string, text: string) {
    const newTask: ITask = { title: title, text: text, start: new Date };
    this.taskService.postTask(newTask)
      .subscribe(task => this.taskService.pushTask(task));
  }
}
