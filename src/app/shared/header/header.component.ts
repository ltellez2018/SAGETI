import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();
  public titlePage = '';

  constructor(private title: Title, private route: Router) {
        this.getDataRoute().subscribe( ( data: any ) => {
        this.titlePage = data.title;
        this.title.setTitle( this.titlePage );
      });
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


  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  // **************************************************** //
  // ***             'SIGN OUT '                      *** //
  // **************************************************** //
  onLogout() {
    this.route.navigate(['/login']);
  }


  
/*    // **************************************************** //
  // ***             'HOME'                            *** //
  // ***************************************************** //
  goUser() {
    console.log('Going home');
    this.route.navigate(['/dashboard/users']);
  }
 */
}
