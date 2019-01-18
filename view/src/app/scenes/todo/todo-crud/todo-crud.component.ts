import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITodo } from "../todo";
import { TodoService } from "../todo.service";

@Component({
  selector: 'app-todo-crud',
  templateUrl: './todo-crud.component.html',
  styleUrls: ['./todo-crud.component.css']
})
export class TodoCrudComponent implements OnInit {
  title: string;

  constructor(private todoService: TodoService,
    private router: Router) { }

  ngOnInit() { }

  postTodo(title: string) {
    const newTodo: ITodo = { title: title, start: new Date };
    this.todoService.postTodo(newTodo)
      .subscribe(todo => {
        this.todoService.pushTodos(todo);
        this.title = "";
        this.router.navigate(['']);
      });
  }

}
