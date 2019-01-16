import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * Import components
 */
import { HomeComponent } from "./scenes/layout/home/home.component";
import { TaskComponent } from "./scenes/task/task/task.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'task', component: TaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
