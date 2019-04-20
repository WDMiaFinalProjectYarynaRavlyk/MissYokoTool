
  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import {ItemService} from '../../../services/item.service';
  import {ProjectService} from '../../../services/project.service';
  import { environment } from '../../../../environments/environment';

  
  @Component({
    selector: 'app-one-item',
    templateUrl: './one-item.component.html',
    styleUrls: ['./one-item.component.css']
  })
  
  export class OneItemComponent implements OnInit {
    projects: any = [];
    item:any ={};
    projId: any;
    itemId = this.item.id;
    usedQ:any;
    data:any ={}

    constructor(private theRoute: ActivatedRoute,
      private myService: ItemService, private myProjectService:ProjectService) { }
  
    ngOnInit() {
      this.theRoute.params
        .subscribe((params) => {
          this.myService.getOneEntry(params['id'])
          .subscribe((theItem)=>{
            this.item = theItem
          })   
        });

        this.myProjectService.getProjectEntries()
        .subscribe((allProjects)=> {
          console.log('the projects in list: ', allProjects)
          this.projects = allProjects;
        }, 
        (err) => {
          console.log("err in list while getting the projects: ", err);
        })

        

    }

    addItemToProject(data, usedQ){
     
      this.usedQ = usedQ;
      this.data ={
      

      }

      
    //   // this.usedQ = 1<= this.item.quantity;
      console.log("projId", this.projId)
      console.log("ItemID", this.itemId)
      console.log("UsedQ", this.usedQ)

      
    


    //   // USE ITEMID
    //   // ADD PROJECTS HERE SINCE NOW YOU HAVE THE PROJID AVAILABLE AS SOON AS YOU CLICK ON THE SELECT
    //   // ADD THIS TO NGONINIT SO IT SENDS THE DATA AS SOON AS YOU CLICK ON IT    
    }
  

  }