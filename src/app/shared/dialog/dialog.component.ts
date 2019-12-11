import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  title = "";
  content = "";

  constructor( public dialogRef: MatDialogRef<DialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) {

              this.title = data.title;
              this.content = data.content;
  }

  ngOnInit() {
  }


  
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
