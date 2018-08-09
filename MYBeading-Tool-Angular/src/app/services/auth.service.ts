
import {throwError as observableThrowError} from 'rxjs';

// import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {
  loggedInUser: any;

  errorMessage:any;

  constructor(private http: Http) { }

  handleError(e) {
    // this.errorMessage = e.json().message;
     return observableThrowError(e.json().message);
  }

  signup(user) {
    return this.http.post(`http://localhost:3000/signup`, user, {withCredentials:true})
    .map(res=>res.json())
  }

  login(user) {
    return this.http.post(`http://localhost:3000/login`, user, {withCredentials:true})
    .map(res=>{return res.json()})
  }

  logout() {
    return this.http.post(`http://localhost:3000/logout`, {}, {withCredentials:true})
    .map(res=>res.json())
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/loggedin`, {withCredentials:true})
    .map(res => { 
        this.loggedInUser = res;
      return JSON.parse(this.loggedInUser._body)
      })
  }

  updateUser(user) {
    return this.http.post(`http://localhost:3000/update`, user, {withCredentials:true})
    .map((res) => { 
      this.loggedInUser = res;
      return  JSON.parse (this.loggedInUser._body)
      })
   
  }
  
  
  delete(user) {
    return this.http.post(`http://localhost:3000/delete`,user, {withCredentials:true})
    .map((res)=> res.json())
  }


  getOneUser(userId) {
    return this.http.post(`http://localhost:3000/user/` + userId, {withCredentials:true})
    .map((res) => { 
    return JSON.parse ((<any>res)._body)
    })
  
}

}
