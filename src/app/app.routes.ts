import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ListUserComponent } from './list-user/list-user.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  ,{ path: 'login', component: LoginComponent }
  ,{ path: 'list-user', component: ListUserComponent }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
