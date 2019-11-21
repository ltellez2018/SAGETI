import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './main/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
              { path: '', component: WelcomeComponent, data: { title: 'App - Home' } },
              { path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule)},
              { path: 'events', loadChildren: () => import('../events/events.module').then(m => m.EventsModule)},
       ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
