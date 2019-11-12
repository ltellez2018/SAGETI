import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  type: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    console.log(data);
  }

  ngOnInit() {}

  get getIcon() {
    this.type = this.data.snackType;
    switch (this.data.snackType) {
      case 'Success':
        return 'check_circle';
      case 'Error':
        return 'cancel';
      case 'Warn':
        return 'error_outline';
      case 'Info':
        return 'info';
    }
  }
}
