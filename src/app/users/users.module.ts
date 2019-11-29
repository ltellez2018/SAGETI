import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersHomeComponent } from './home/users-home.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material.module';
import { NewUserComponent } from './new-user/new-user.component';
import { RouterModule } from '@angular/router';
import { SearchUserComponent } from './search-user/search-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersHomeComponent,
    NewUserComponent,
    SearchUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsersModule { }
