import { Component, OnInit } from '@angular/core';
import { ITodo } from "../todo";
import { TodoService } from "../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: ITodo[] = [];

  constructor(private todoService: TodoService) {
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
}
