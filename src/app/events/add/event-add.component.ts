import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { MenuData } from '../data/menu-data';
import { EventServiceService } from '../event-service.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent implements OnInit {

  registerFormGroup: FormGroup;
  aproveFormGroup: FormGroup;
  typeInputTimeStart = 'text';
  typeInputTimeEnding = 'text';
  menuSelected: MenuData;
  menus: MenuData [] = [];
  costTotal = 0;

  constructor(private formBuilder: FormBuilder, public eventServiceService: EventServiceService,
              public dialog: MatDialog  ) {}

  ngOnInit() {
    this.typeInputTimeStart = 'text';
    this.typeInputTimeEnding = 'text';
    this.registerFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      subject: ['', Validators.required],
      kind: ['', Validators.required],
      date: ['', Validators.required],
      startE: ['', Validators.required],
      finishE: ['', Validators.required],
      place: ['', Validators.required],
      menu: ['', Validators.required],
      quorum: ['', Validators.required]
    });

    this.aproveFormGroup = this.formBuilder.group({
    });
    // * Load menus
    this.fetchEvents();
  }


  fetchEvents() {
      this.eventServiceService.fetchAllEvents().subscribe(
          (menus: MenuData []) => this.menus = menus);
  }

   // **************************************************** //
   // ***       'Select a Menu'                         *** //
   // **************************************************** //
   selectMenu(event: any) {
    this.menuSelected = null;
    this.menuSelected =  this.menus.find( (menu: MenuData) => menu.name === event.source.value);
  }


    onKey(event: any) {
      if (this.menuSelected !== null) {
        this.costTotal = 0;
        this.costTotal = this.menuSelected.cost * event.target.value;
      }
    }

    onClicTimeStart() {
        this.typeInputTimeStart = 'time';
    }

    onClicTimeEnding() {
      this.typeInputTimeEnding = 'time';
    }

    onSubmit() {
     /* this.eventServiceService.addEvent({
       title:   this.registerFormGroup.value.title,
       subject: this.registerFormGroup.value.subject,
       kind:    this.registerFormGroup.value.kind,
       date:    this.registerFormGroup.value.date,
       startE:  this.registerFormGroup.value.startE,
       finishE: this.registerFormGroup.value.finishE,
       place:   this.registerFormGroup.value.place,
       menu:    this.registerFormGroup.value.menu,
       quorum:  this.registerFormGroup.value.quorum,
       cost:    this.costTotal
      }); */

      this.confirmsubmit();
    }


    confirmsubmit(  ) {

      console.log('confirmsubmit');
      

      const dialogRef = this.dialog.open( DialogComponent , {
        width: '400px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
  
        if ( !result ) {
          return;
        }  
      
      });
  
    }

}
