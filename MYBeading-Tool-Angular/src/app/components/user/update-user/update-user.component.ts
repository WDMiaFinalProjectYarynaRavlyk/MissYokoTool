import { Component, OnInit } from '@angular/core';
import { AuthService}         from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router'
import { LoginComponent } from '../login/login.component';


import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  

user:any = {
  username: '',
  password: '',
  name: '',
  lastname: '',
  email: ''
};
theError:any;

  myCoolUploader = new FileUploader({
    // url: environment.apiBase + "/signup",  ${environment.apiBase}
     url: 'http://localhost:3000/user/update',
    itemAlias: "theImage"
  });

  constructor(private theRoute: ActivatedRoute,private homeRouter: Router, private myService: AuthService) { }

  updateAccount(){
    console.log('user in update: ', this.user)
 
      this.myCoolUploader.onBuildItemForm = (item, form) => {
        console.log('on build form')
        form.append("username", this.user.username);
        form.append("password", this.user.password);
        form.append("name", this.user.name);
        form.append("lastname", this.user.lastname);
        form.append("email", this.user.email);
        
      }
      this.myCoolUploader.onSuccessItem = (item) =>{
        console.log('on success form')

        this.homeRouter.navigate(["/"]);
      }
      this.myCoolUploader.onErrorItem = (item) => {
        console.log('on error form')

      this.theError = "Saving entry with image went bad. Sorry!";
      }
      this.myCoolUploader.uploadAll();
  
    }
    
  
    ngOnInit() {
      this.myService.isLoggedIn()
      .toPromise()
      .then( loggedInUser => {

        this.user = loggedInUser;
        console.log('user in cmp: ', this.user)
      } )
      .catch( err => err.json() )
    }

}
