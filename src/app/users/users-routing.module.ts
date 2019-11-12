import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersHomeComponent } from './home/users-home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
      path: '',
      component: UsersHomeComponent,
      children: [
            { path: 'newUser', component: NewUserComponent, data: { title: 'App - New User' } },
            { path: 'searchUser', component: SearchComponent, data: { title: 'App - Search Users' } }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
