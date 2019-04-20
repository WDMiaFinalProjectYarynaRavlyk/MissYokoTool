import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    constructor(private myHttp: Http) { }

    getProjectEntries(){
      return this.myHttp.get('http://localhost:3000/projects',)
      .map((res)=> res.json())
    }

    addNewProject(project){
      return this.myHttp.post('http://localhost:3000/projects/create', project)
      .map((res)=>res.json());
    }

    getOneProject(projectId){
      return this.myHttp.get('http://localhost:3000/projects/'+ projectId)
      .map((res)=> res.json())
    }

    deleteProject(projectId){
      return this.myHttp.post('http://localhost:3000/projects/'+ projectId +'/delete', projectId)
      .map((res)=> res.json())
    }

    updateProject (projectId){
      return this.myHttp.post('http://localhost:3000/projects/'+ projectId +'/update', projectId)
      .map((res)=> res.json())
    }

}