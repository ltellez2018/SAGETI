import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { MenuData } from '../data/menu-data';
import { EventServiceService } from '../event-service.service';
import { MatDialog, MatStepper } from '@angular/material';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent implements OnInit {

  registerFormGroup: FormGroup;
  aproveFormGroup: FormGroup;
  menuSelected: MenuData;
  menus: MenuData [] = [];
  costTotal = 0;
  nameEvent = "";

  constructor(private formBuilder: FormBuilder, public eventServiceService: EventServiceService,
              public dialog: MatDialog  ) {}

  ngOnInit() {
    // * Firt Form
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

    // * Second Form
    this.aproveFormGroup = this.formBuilder.group({
      checked: [false,Validators.required]
    });

    // * Load menus
    this.fetchEvents();
  }

  // **************************************************** //
  // ***         'Fetchng  all events'                *** //
  // **************************************************** //
  
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

  // **************************************************** //
  // ***     'Calculating the total price'            *** //
  // **************************************************** //
  

  calPrice(event: any) {
      if (this.menuSelected !== null) {
        this.costTotal = 0;
        this.costTotal = this.menuSelected.cost * event.target.value;
      }
    }

  // **************************************************** //
  // ***         'Sending the data'                   *** //
  // **************************************************** //
    
    onSubmit() {
      this.eventServiceService.addEvent({
       title:   this.registerFormGroup.value.title,
       subject: this.registerFormGroup.value.subject,
       kind:    this.registerFormGroup.value.kind,
       date:    this.registerFormGroup.value.date,
       startE:  this.registerFormGroup.value.startE,
       finishE: this.registerFormGroup.value.finishE,
       place:   this.registerFormGroup.value.place,
       menu:    this.registerFormGroup.value.menu,
       quorum:  this.registerFormGroup.value.quorum,
       status: "started",
       cost:    this.costTotal
      }); 
      this.nameEvent = this.registerFormGroup.value.title;
    }


// **************************************************** //
// ***  'Call to dialog component'                  *** //
// **************************************************** //

    onDialog( stepper: MatStepper ) {

      const dialogRef = this.dialog.open(DialogComponent,{
        data:{
          title: 'Confirm the action',
          content: 'Are you sure about you event?'
        }
      });

      dialogRef.afterClosed().subscribe( (confirmed: boolean)  => {
        console.log('The dialog was closed');
        if (confirmed) {
          console.log("User confirmed the event");
          this.onSubmit();
          stepper.next();
        } else {
          console.log("User not has confirmed the event");
        }    
      });  
    }

}
