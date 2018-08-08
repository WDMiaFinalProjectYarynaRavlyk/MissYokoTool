
import {throwError as observableThrowError} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  errorMessage:any;

  constructor(private http: Http) { }

  handleError(e) {
    // this.errorMessage = e.json().message;
     return observableThrowError(e.json().message);
  }

  signup(user) {
    return this.http.post(`http://localhost:3000/signup`, user, {withCredentials:true}).pipe(
      map(res => res.json()),
      catchError(this.handleError),);
  }

  login(user) {
    return this.http.post(`http://localhost:3000/login`, user, {withCredentials:true}).pipe(
      map(res => res.json()),
      catchError(this.handleError),);
  }

  logout() {
    return this.http.post(`http://localhost:3000/logout`, {}, {withCredentials:true}).pipe(
      map(res => res.json()),
      catchError(this.handleError),);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/loggedin`, {withCredentials:true}).pipe(
      map((res) => { 
        JSON.parse ((<any>res)._body)
      }),
      catchError(this.handleError),);
  }

  updateUser(user) {
    return this.http.post(`http://localhost:3000/update`, user, {withCredentials:true}).pipe(
      map((res) => { 
        JSON.parse ((<any>res)._body)
      }),
      catchError(this.handleError),);
  }
  
  
  delete(user) {
    return this.http.post(`http://localhost:3000/delete`,user, {withCredentials:true}).pipe(
    map((res)=> res.json()))
  }


  getOneUser(userId) {
    return this.http.post(`http://localhost:3000/user/` + userId, {withCredentials:true}).pipe(
    map((res) => { 
      JSON.parse ((<any>res)._body)
    }),
    catchError(this.handleError),);
}

}
