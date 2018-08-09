import { Component, OnInit } from '@angular/core';
import {AuthService}         from '../../services/auth.service';

import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router'
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  

user:any = {};
theError:any          ;

  myCoolUploader = new FileUploader({
    // url: environment.apiBase + "/signup",  ${environment.apiBase}
     url: 'http://localhost:3000/update',
    itemAlias: "theImage"
  });

  constructor(private theRoute: ActivatedRoute,private homeRouter: Router, private myService: AuthService) { }

  updateAccount(user){
    console.log("User to update",this.user)
    this.myService.updateUser(this.user)
    .subscribe(res=>{
      this.myCoolUploader.onBuildItemForm = (item, form) => {
        form.append("username", user.username);
        form.append("password", user.password);
        form.append("name", user.name);
        form.append("lastname", user.lastname);
        form.append("email", user.email);
        
      }
      this.myCoolUploader.onSuccessItem = (item, response) =>{
        this.homeRouter.navigate(["/"]);
      }
      this.myCoolUploader.onErrorItem = (item, response) => {
        this.theError = "Saving entry with image went bad. Sorry!";
      }
      this.myCoolUploader.uploadAll();
      })
    }
    
  
    ngOnInit() {
      this.myService.isLoggedIn()
      .toPromise()
      .then( loggedInUser => {
        // console.log('loggedInUser: ', loggedInUser)
        this.user = loggedInUser;
      } )
      .catch( err => err.json() )

      this.theRoute.params
      .subscribe((params) => {
        this.myService.getOneUser(params._id)
        
        .subscribe((theUser)=>{
          this.user = theUser
        })   
      });
    }

}
