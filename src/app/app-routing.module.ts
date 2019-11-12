import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundPageComponent } from './page-error/404/not-found-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent,data: { title:  'App - [ Sing in ]' }},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '**', component: NotFoundPageComponent, data: { title:  'App - [ 404 ]' }}
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
