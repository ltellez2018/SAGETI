import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  constructor(private usersService: UsersServiceService) { }


  ngOnInit() {
    // INITF FORM
    this.userForm = new FormGroup({
      firstName: new FormControl('', {validators: [Validators.required]}),
      lastName: new FormControl('', {validators: [Validators.required]}),
      name: new FormControl('', {validators: [Validators.required]}),
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      key: new FormControl('', {validators: [Validators.required]}),
      profile: new FormControl('', {validators: [Validators.required]})
    });
  }

  
  // **************************************************** //
  // ***         'SUBMIT VALUES FORM'                 *** //
  // **************************************************** //
  onSubmit() {
    this.usersService.addUser({
      firstName:  this.userForm.value.firstName,
      lastName:  this.userForm.value.lastName,
      name:  this.userForm.value.name,
      email:  this.userForm.value.email,
      key:  this.userForm.value.key,
      profile:  this.userForm.value.profile
    });
   }

}
