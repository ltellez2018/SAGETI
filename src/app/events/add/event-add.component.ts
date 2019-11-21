import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  typeInputTimeStart = 'text';
  typeInputTimeEnding = 'text';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.typeInputTimeStart = 'text';
    this.typeInputTimeEnding = 'text';
    this.firstFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      subject: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onClicTimeStart() {
      this.typeInputTimeStart = 'time';
  }

  onClicTimeEnding() {
    this.typeInputTimeEnding = 'time';
}
}