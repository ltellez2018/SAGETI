import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EventsRoutingModule } from './events-routing.module';
import { EventAddComponent } from './add/event-add.component';
import { EventHomeComponent } from './home/event-home.component';
import { EventSearchComponent } from './search/event-search.component';
import { EventsAdminComponent } from './admin/events-admin.component';



@NgModule({
  declarations: [
  EventAddComponent,
  EventHomeComponent,
  EventSearchComponent,
  EventsAdminComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EventsModule { }
