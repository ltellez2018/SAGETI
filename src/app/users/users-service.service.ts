import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './data/user-data.model';
import { SnackBarService } from '../snackBar/snackBar.servce';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor( private db: AngularFirestore,
               private snackBarService: SnackBarService) { }


  addUser(user: User) {
    console.log({user});

    this.db.collection('users').add(user)
      // * .then( () => this.snackBarService.showSnackbar('User saved successfully', null, 3000))
      .then( () => this.snackBarService.openSnackBar('User saved successfully', '', 'Success'))
      // *.catch(error => this.snackBarService.showSnackbar(error.message, null, 3000));
      .catch(error => this.snackBarService.openSnackBar(error.message, '', 'Error'));
  }
}
