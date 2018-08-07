import { Component, OnInit } from '@angular/core';
import {AuthService}         from '../../services/auth.service';
import {HttpClient }        from '@angular/common/http';
import {FormsModule}         from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signUpUser:any    = {};
  theActualUser:any = {};
  loginUser:any     = {};
  theError:any          ;


constructor(private authService: AuthService) { }

tryToSignUp(){
  this.authService.signup(this.signUpUser)
  .subscribe (
    userObjFromApi =>{this.successCallback(userObjFromApi)},
    blahErrorThing =>{this.errorCallback(blahErrorThing)}
  );
}

tryToLogIn(){
  this.authService.login(this.loginUser)
  .subscribe (
    res=>{this.successCallback(res)},
    error=>{this.errorCallback(error)}
  );
}

logMeOut() {
  this.authService.logout()
  .subscribe (
    res=>{this.theActualUser = {}},
    error=>{this.theError = error}
  );
}

successCallback(userObject){
  this.theActualUser = userObject;
  this.theError = null;
}

errorCallback(errorObject){
  this.theError = errorObject;
  this.theActualUser = '' ;
}

checkIfLoggedIn(){
  this.authService.isLoggedIn()
  
  .subscribe(
    (res) => {
      (this.successCallback(res),
      console.log(this.theActualUser))
    },
    error => (this.errorCallback(''))
  )
}

ngOnInit() {
  this.checkIfLoggedIn()
}

}
