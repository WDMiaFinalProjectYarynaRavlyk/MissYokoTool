
import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../../../services/project.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class  AllProjectsComponent implements OnInit {

  constructor(private myService: ProjectService ) { }
// myService - bname whatever

  projects:Array<any> = [];
  project:any = {};


  addNewProject(){
    this.myService.addNewProject(this.project)
    .subscribe(()=>{
      this.project = {};
      this.getProjectEntries();
     
    })
  }

  deleteProject(projectId){
    this.myService.deleteProject(projectId)
    .subscribe(()=>{
      this.getProjectEntries();
    
    })
  }

  getProjectEntries(){
    this.myService.getProjectEntries()
    .subscribe((res)=>{
      this.projects = res.reverse();
    })
  }

  ngOnInit() {
    this.getProjectEntries();
  }

}