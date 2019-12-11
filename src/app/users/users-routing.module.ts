import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersHomeComponent } from './home/users-home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { SearchUserComponent } from './search-user/search-user.component';


const routes: Routes = [
  {
      path: '',
      component: UsersHomeComponent,
      children: [
            { path: '', component: SearchUserComponent, data: { title: 'App - Search Users' } },
            { path: 'newUser', component: NewUserComponent, data: { title: 'App - New User' } },
            { path: 'searchUser', component: SearchUserComponent, data: { title: 'App - Search Users' } }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
