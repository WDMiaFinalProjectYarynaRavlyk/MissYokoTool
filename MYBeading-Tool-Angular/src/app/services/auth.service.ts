import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  errorMessage:any;

  constructor(private http: Http) { }

  handleError(e) {
    // this.errorMessage = e.json().message;
     return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`http://localhost:3000/api/signup`, user, {withCredentials:true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`http://localhost:3000/api/login`, user, {withCredentials:true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`http://localhost:3000/api/logout`, {}, {withCredentials:true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/loggedin`, {withCredentials:true})
      .map((res) => { 
        JSON.parse ((<any>res)._body)
      })
      .catch(this.handleError);
  }

  update(user) {
    return this.http.post(`http://localhost:3000/api/update`,user, {withCredentials:true})
      .map((res) => { 
        JSON.parse ((<any>res)._body)
      })
      .catch(this.handleError);
  }
  delete(user) {
    return this.http.post(`http://localhost:3000/api/delete`,user, {withCredentials:true})
      .map((res) => { 
        JSON.parse ((<any>res)._body)
      })
      .catch(this.handleError);
  }


}
