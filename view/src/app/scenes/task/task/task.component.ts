import { Component, OnInit } from '@angular/core';

import { TaskService } from "../task.service";
import { ITask } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.currentTasks.subscribe(tasks => {
      this.tasks = tasks
    });
  }

}
