import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material.module';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
      HeaderComponent,
      FooterComponent,
      SidenavListComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
      HeaderComponent,
      FooterComponent,
      SidenavListComponent
  ]
})
export class SharedModule { }
