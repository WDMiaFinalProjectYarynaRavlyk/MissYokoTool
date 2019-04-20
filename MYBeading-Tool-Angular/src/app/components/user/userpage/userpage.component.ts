import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthService}         from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  user: any;

  constructor(private theRoute: ActivatedRoute,
    private myService: AuthService) { }

  
  ngOnInit() {
    this.myService.isLoggedIn()
      .toPromise()
      .then( loggedInUser => {
        // console.log('loggedInUser: ', loggedInUser)
        this.user = loggedInUser;
      } )
      .catch( err => err.json() )
  }

}