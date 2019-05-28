import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { InsertComponent } from './board/insert/insert.component';
import { ViewComponent } from './board/view/view.component';

const routes: Routes = [
  {
    path:'board',
    component : BoardComponent
  },
  {
    path:'login',
    component : LoginComponent
  },
  {
    path:'insert/:biType',
    component : InsertComponent
  },
  {
    path:'view/:biNum',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
