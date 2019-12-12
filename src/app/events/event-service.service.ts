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
  // ***       'Fetcing all events'                    *** //
  // **************************************************** //

  fetchAllEvents() {
    return this.db.collection('events').snapshotChanges().pipe(
      map(snaps => {
            return snaps.map( snap => {
              return {
                ...snap.payload.doc.data(),
                id: snap.payload.doc.id
              };
            });
      }));
  }

  // **************************************************** //
  // ***       'Fetcing all menus'                    *** //
  // **************************************************** //

  fetchAllMenus() {
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
    return this.db.collection('events').add(event)
    /* .then( () => this.snackBarService.openSnackBar('Event adding successfully', '', 'Success')) */
    .then( data => {
      event.id = data.id;    
      this.snackBarService.openSnackBar('Event adding successfully', '', 'Success');
    })
    .catch(error => this.snackBarService.openSnackBar(error.message, '', 'Error'));
  }

// **************************************************** //
// ***        'Updating status event'               *** //
// **************************************************** //

  updateEvent(eventId: string, status: Partial<EventData>){
    this.db.doc(`/events/${eventId}`).update(status)
    .then( () => this.snackBarService.openSnackBar('Event updated successfully', '', 'Success'))
    .catch(error => this.snackBarService.openSnackBar(error.message, '', 'Error'));

  }

}
