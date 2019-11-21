import { Component, ViewChild, ElementRef,OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-events-admin',
  templateUrl: './events-admin.component.html',
  styleUrls: ['./events-admin.component.scss']
})
export class EventsAdminComponent implements OnInit, AfterViewInit {
  
  
  @ViewChild('scrollBottom', {static: false}) scrollBottom: ElementRef;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.setScrolBottom();
  }
  setScrolBottom() {
    this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;
  }

}