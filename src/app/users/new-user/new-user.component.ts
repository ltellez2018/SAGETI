import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersServiceService } from '../users-service.service';
import { Profile } from '../data/profile-data.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  profiles: Profile [] = [];
  profileSelected: Profile = null;

  userForm: FormGroup;
  constructor(private usersService: UsersServiceService) { }


  ngOnInit() {
    // * init Form
    this.initForm();
    // * fetch Profiles
    this.fetchProfiles();
  }


  initForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', {validators: [Validators.required]}),
      lastName: new FormControl('', {validators: [Validators.required]}),
      name: new FormControl('', {validators: [Validators.required]}),
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      key: new FormControl('', {validators: [Validators.required]}),
      profile: new FormControl('', {validators: [Validators.required]})
    });
  }

  fetchProfiles() {
    this.usersService.fetchProfiles().subscribe( (data: any) => {
      this.profiles = data;
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
      profile:  this.userForm.value.profile,
      date: new Date()
    });
    // * After submit the form is reseted
    this.initForm();
    this.profileSelected = null;
   }


   // **************************************************** //
   // ***       'Select a Profile'                     *** //
   // **************************************************** //
   selectProfile(event: any) {
    this.profileSelected = null;
    this.profileSelected =  this.profiles.find( (prof: Profile) => prof.name === event.source.value);
  }



  // **************************************************** //
  // ***           'Reseting form'                    *** //
  // **************************************************** //
   resetForm() {
         this.userForm.reset('');
         this.profileSelected = null;
  }
}
