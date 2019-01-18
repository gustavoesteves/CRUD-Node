import { Component, OnInit } from '@angular/core';
import { ITodo } from "../todo";
import { TodoService } from "../todo.service";

@Component({
  selector: 'app-todo-crud',
  templateUrl: './todo-crud.component.html',
  styleUrls: ['./todo-crud.component.css']
})
export class TodoCrudComponent implements OnInit {
  titleValue: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.titleValue = "";
  }

  postTodo(title: string) {
    const newTodo: ITodo = { title: title, start: new Date };
    this.todoService.postTodo(newTodo)
      .subscribe(todo => {
        this.todoService.pushTodos(todo);
        this.titleValue = "";
      });
  }

}
