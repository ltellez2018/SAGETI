import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  
  constructor(private title: Title, private route: Router) {
        this.getDataRoute().subscribe( ( data: any ) => this.title.setTitle( data.title ));
   }


  ngOnInit() {
  }

  // **************************************************** //
  // ***        'GET DATA FROM ROUTE-DATA'            *** //
  // **************************************************** //
  getDataRoute() {
    return this.route.events
        .pipe(filter( evento => evento instanceof ActivationEnd  ))
        .pipe(filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ))
        .pipe(map( (evento: ActivationEnd) => evento.snapshot.data ));
  }

}
