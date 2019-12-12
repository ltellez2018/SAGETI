import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.scss']
})
export class EventSearchComponent implements OnInit, AfterViewInit {

   /* Mat-table Components */
   displayedColumns = ['title','place','date','cost', 'quorum','status'];
   dataSource = new MatTableDataSource<Event>();
   isloading = true;
   @ViewChild(MatSort, { static: false }) sort: MatSort;
   @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
 
   
  constructor(private eventServiceService: EventServiceService) { }

  ngOnInit() {
    this.eventServiceService.fetchAllEvents().subscribe( (events : any[] ) => {
      this.dataSource.data = events;   
      this.isloading = false;     
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
