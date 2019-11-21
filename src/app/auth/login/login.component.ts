import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// * Custom Services
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public currentDate = new Date().getFullYear();
  private titlePage = '';
  hide = true;
  loginForm: FormGroup;

  constructor(private title: Title, private route: Router,
              private authService: AuthServiceService) {
        this.getDataRoute().subscribe( ( data: any ) => {
        this.titlePage = data.title;
        this.title.setTitle( this.titlePage );
      });
   }

  ngOnInit() {
    // INITF FORM
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required]})
    });
  }

  // **************************************************** //
  // ***        'GET DATA FROM ROUTE-DATA'            *** //
  // **************************************************** //
  getDataRoute() {
    return this.route.events
        .pipe(filter( evento => evento instanceof ActivationEnd  ))
        .pipe(filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ))
        .pipe(map( (evento: ActivationEnd) => evento.snapshot.data ));
  }


  // **************************************************** //
  // ***         'SUBMIT VALUES FORM'                 *** //
  // **************************************************** //
  onSubmit() {
   this.authService.login({
     email: this.loginForm.value.email,
     password: this.loginForm.value.password
   });
  }
}
