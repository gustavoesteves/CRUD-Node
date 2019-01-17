import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './scenes/todo/todo/todo.component';
import { TaskComponent } from './scenes/task/task/task.component';
import { HomeComponent } from './scenes/layout/home/home.component';
import { TodoCrudComponent } from './scenes/todo/todo-crud/todo-crud.component';
import { TaskCrudComponent } from './scenes/task/task-crud/task-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TaskComponent,
    HomeComponent,
    TodoCrudComponent,
    TaskCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
