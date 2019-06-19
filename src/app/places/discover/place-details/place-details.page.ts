import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  onBookPlace() {
this.router.navigateByUrl('/places/tabs/discover');
  }

}
