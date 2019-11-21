import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventHomeComponent } from './home/event-home.component';
import { EventAddComponent } from './add/event-add.component';
import { EventSearchComponent } from './search/event-search.component';
import { EventsAdminComponent } from './admin/events-admin.component';



const routes: Routes = [
 {
      path: '',
      component: EventHomeComponent,
      children: [
            { path: 'addEvent', component: EventAddComponent, data: { title: 'App - New Event' } },
            { path: 'searchEvent', component: EventSearchComponent, data: { title: 'App - Search Event' } },
            { path: 'adminEvent', component: EventsAdminComponent, data: { title: 'App - Admin Event' } }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
