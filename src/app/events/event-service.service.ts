import { Injectable } from '@angular/core';
// * firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { EventData } from './data/event-data';
import { SnackBarService } from '../snackBar/snackBar.servce';


@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor( private db: AngularFirestore, private snackBarService: SnackBarService) { }


  // **************************************************** //
  // ***       'Fetcing all menus'                    *** //
  // **************************************************** //

  fetchAllEvents() {
    return this.db.collection('menus').snapshotChanges().pipe(
      map(snaps => {
            return snaps.map( snap => {
              return {
                id: snap.payload.doc.id,
                ...snap.payload.doc.data()
              };
            });
      }));
}


  // **************************************************** //
  // ***      'addinf event to firebase cloud'        *** //
  // **************************************************** //

  addEvent(event: EventData) {
    this.db.collection('events').add(event)
    .then( () => this.snackBarService.openSnackBar('Event adding successfully', '', 'Success'))
    .catch(error => this.snackBarService.openSnackBar(error.message, '', 'Error'));
  }

}
