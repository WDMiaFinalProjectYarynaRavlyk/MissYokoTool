import { Component, OnInit } from '@angular/core';
import {AuthService}         from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: any = {};
  constructor(private theRoute: ActivatedRoute,private homeRouter: Router, private myService: AuthService) { }


  updateAccount(){
    this.myService.updateUser(this.user)
    .subscribe((res)=>{
      this.homeRouter.navigateByUrl('')
      })
    }
    

    ngOnInit() {
      this.theRoute.params
      .subscribe((params) => {
        this.myService.getOneUser(params['id'])
        
        .subscribe((theUser)=>{
          this.user = theUser
        })   
      });
    }

}
