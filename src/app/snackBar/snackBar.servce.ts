import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackBarType } from './snacBar-data.model';
import { SnackbarComponent } from './snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) {}

   openSnackBar(message: string, action: string, type: string) {

    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      data: { message, snackType: type}
    });
  }
}
