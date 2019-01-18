import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ITodo } from "../todo";
import { TodoService } from "../todo.service";
import { TaskService } from "../../task/task.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: ITodo[] = [];

  constructor(private todoService: TodoService,
    private taskService: TaskService,
    private router: Router) {
    this.todoService.getTodo()
      .subscribe(todos => {
        this.todoService.pushTodosInit(todos);
      });
  }

  ngOnInit() {
    this.todoService.currentTodos.subscribe(todos => {
      this.todos = todos;
    });
  }

  async getTasks(id: string) {
    await this.taskService.setIdTodo(id);
    this.taskService.getTask()
      .subscribe(tasks => {
        this.taskService.pushTasksInit(tasks);
        this.router.navigate(['/task']);
      });
  }
}
