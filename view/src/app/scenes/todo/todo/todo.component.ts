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

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodo()
      .subscribe(todo => {
        console.log('chegou...');
        console.log(todo);
        this.todos = todo;
      });
      /*
    this.todos.push(
      { title: 'Todo 1', start: new Date },
      { title: 'Todo 2', start: new Date },
      { title: 'Todo 3', start: new Date },
      { title: 'Todo 4', start: new Date },
      { title: 'Todo 5', start: new Date }
    );
    */
  }

}
