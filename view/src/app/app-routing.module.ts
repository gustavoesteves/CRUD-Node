import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * Import components
 */
import { HomeComponent } from "./scenes/layout/home/home.component";
import { TaskComponent } from "./scenes/task/task/task.component";
import { TodoCrudComponent } from "./scenes/todo/todo-crud/todo-crud.component";
import { TaskCrudComponent } from "./scenes/task/task-crud/task-crud.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'task', component: TaskComponent },
  { path: 'todo', component: TodoCrudComponent },
  { path: 'newtask', component: TaskCrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
