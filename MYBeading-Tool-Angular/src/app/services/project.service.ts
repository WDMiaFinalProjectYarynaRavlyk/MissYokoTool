import {throwError as observableThrowError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


  @Injectable()
  export class ProjectService {

 
  errorMessage:any;


  handleError(e) {
    // this.errorMessage = e.json().message;
    return observableThrowError(e.json().message);
  }

  constructor(private myHttp: Http) {}

  getAllEntries(){
    return this.myHttp.get(`http://localhost:3000/projects`, { withCredentials: true })
    .map(res => res.json())
  }

  }