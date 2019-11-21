import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})


export class WelcomeComponent implements OnInit {

  constructor(private route: Router ) { }



    ngOnInit() {
    }
  
  
    
     // **************************************************** //
    // ***             'Users'                            *** //
    // ***************************************************** //
    goUser() {
      this.route.navigate(['/dashboard/users']);
    }
  
    
     // **************************************************** //
    // ***             'Events'                            *** //
    // ***************************************************** //
    goEvents() {
      this.route.navigate(['/dashboard/events']);
    }
 
 
}
