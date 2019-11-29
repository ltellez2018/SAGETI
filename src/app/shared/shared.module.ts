import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material.module';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  entryComponents: [
    DialogComponent
  ],
  declarations: [
      HeaderComponent,
      FooterComponent,
      SidenavListComponent,
      DialogComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
      HeaderComponent,
      FooterComponent,
      SidenavListComponent,
      DialogComponent
  ]
})
export class SharedModule { }
