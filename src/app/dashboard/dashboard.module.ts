import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

// * H O M E  C O M P O N E N T
import { DashboardComponent } from './main/dashboard.component';

// * C U S T O M   M O D U L E S
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';

// * ANGULAR MATERIAL MODULE
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class DashboardModule { }
