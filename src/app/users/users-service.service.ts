import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './data/user-data.model';
import { SnackBarService } from '../snackBar/snackBar.servce';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  users: User[];

  constructor( private db: AngularFirestore,
               private snackBarService: SnackBarService) { }


  // **************************************************** //
  // ***         'Create new User'                    *** //
  // **************************************************** //
  addUser(user: User) {
    this.db.collection('users').add(user)
      .then( () => this.snackBarService.openSnackBar('User saved successfully', '', 'Success'))
      .catch(error => this.snackBarService.openSnackBar(error.message, '', 'Error'));
  }

  // **************************************************** //
  // ***           'Update a User'                    *** //
  // **************************************************** //
  updateUser(user: User) {
    this.db.collection('users').doc(user.id).set(user)
      .then( () => this.snackBarService.openSnackBar('User update successfully', '', 'Success'))
      .catch(error => this.snackBarService.openSnackBar(error.message, '', 'Error'));
  }

  // **************************************************** //
  // ***           'Fetching all users'               *** //
  // **************************************************** //

  fetchUsers() {
      return this.db.collection('users').snapshotChanges().pipe(
        map(  docData => {
          return docData.map( doc => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data()
            };
          });

         }));
  }


    // **************************************************** //
  // ***           'Fetching all profiles'               *** //
  // **************************************************** //

  fetchProfiles() {
    return this.db.collection('profile').snapshotChanges().pipe(
      map(  docData => {
        return docData.map( doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
          };
        });

       }));
}

}

