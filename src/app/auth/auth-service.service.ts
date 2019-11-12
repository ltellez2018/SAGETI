import { Injectable } from '@angular/core';
import { SnackBarService } from '../snackBar/snackBar.servce';
import { Router } from '@angular/router';

// * ANGULAR FIRE
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthData } from './data/aut-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isAuth = false;

  constructor( private afAuth: AngularFireAuth,
               private snackBarService: SnackBarService,
               private route: Router ) { }


  // **************************************************** //
  // ***        'Login to AngularFireAuth'            *** //
  // **************************************************** //

  login(authData: AuthData) {
    this.afAuth.auth.signInWithEmailAndPassword( authData.email , authData.password).
      then( result => {
        this.isAuth = true;
        this.route.navigate(['/dashboard']); }).
      catch(error => {
        this.isAuth = false;
        this.snackBarService.openSnackBar(error.message, '', 'Error');
      });
  }


}
