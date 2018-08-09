import {Component, OnInit } from '@angular/core';
import {AuthService}         from '../../services/auth.service';
import {HttpClient }        from '@angular/common/http';
import {FormsModule}         from '@angular/forms';
// images:
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signUpUser:any    = {};
  theActualUser:any = {};
  loginUser:any     = {};
  theError:any;


  myCoolUploader = new FileUploader({
    // url: environment.apiBase + "/signup",  ${environment.apiBase}
     url: 'http://localhost:3000/signup',
    itemAlias: "theImage"
  });

constructor(private authService: AuthService, private myRouter: Router) { }

tryToSignUp(){

    this.myCoolUploader.onBuildItemForm = (item, form) => {

      form.append("username", this.signUpUser.username);
      form.append("password", this.signUpUser.password);
      form.append("name", this.signUpUser.name);
      form.append("lastname", this.signUpUser.lastname);
      form.append("email", this.signUpUser.email);

    }
    this.myCoolUploader.onSuccessItem = (item, response) =>{
      // console.log('in the success form')
      this.theActualUser = this.signUpUser;
        this.myRouter.navigate(["/"]);
        // location.reload();
    }
    this.myCoolUploader.onErrorItem = (item, response) => {
      // console.log('in the error form', item, '= = == = = =', response)

      this.theError = "Saving entry with image went bad. Sorry!";
    }

    this.myCoolUploader.uploadAll();
}

tryToLogIn(){
  this.authService.login(this.loginUser)
  .subscribe (
    res=>{
      this.successCallback(res)
    },
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








// saveNewEntry() {
//   if (this.myCoolUploader.getNotUploadedItems().length === 0) {
//     this.saveNewEntryNoImage();
//   } else {
//     this.saveNewEntryWithImage();
//   }
// }

// saveNewEntryNoImage(){
//   this.myJournalService.createNewEntry(this.entryData)
//   .then( (newEntry) => {
//     console.log('what: ', newEntry)
//     this.entryData = {
//       title: '',
//       content: ''
//     }
//     this.saveError = '';
//     this.myRouter.navigate(['/']);

//   } )
//   .catch( err => this.saveError = 'Error while saving in the component: ');
// }

// private saveNewEntryWithImage(){
//   this.myCoolUploader.onBuildItemForm = (item, form) => {
  
//     form.append("title", this.entryData.title);
//     form.append("content", this.entryData.content);
//   }
//   this.myCoolUploader.onSuccessItem = (item, response) =>{

//       this.saveError = ""
//       this.myRouter.navigate(["/"]);
//   }
//   this.myCoolUploader.onErrorItem = (item, response) => {
//     this.saveError = "Saving entry with image went bad. Sorry!";
//   }
//   this.myCoolUploader.uploadAll();
// }


//.map in service
// .subscribe in component
// observables get each at the time return all separetaly
// promise return the resul together true/false
