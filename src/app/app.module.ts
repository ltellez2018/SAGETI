import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// * ROOT COMPONENTS
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './page-error/404/not-found-page.component';
import { SnackbarComponent } from './snackBar/snackbar.component';

// * ROOT MODULE
import { AuthModule } from './auth/auth.module';

// * MATERIAL
import { MaterialModule } from './material.module';

// * ANGULAR FIREBASE
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SnackbarComponent
  ]
})
export class AppModule { }
