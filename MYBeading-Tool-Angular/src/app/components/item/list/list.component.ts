import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../../services/item.service';
import {ProjectService} from '../../../services/project.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private myService: ItemService, private myProjectService:ProjectService ) { }
// myService - bname whatever

  items:Array<any> = [];
  item:any = {};

  addNew(){
    this.myService.addNewEntry(this.item)
    .subscribe(()=>{
      this.item = {};
      this.getEntries();
     
    })
  }

  deleteOne(itemId){
    this.myService.deleteEntry(itemId)
    .subscribe(()=>{
      this.getEntries();
    
    })
  }

  getEntries(){
    this.myService.getEntries()
    .subscribe((res)=>{
      this.items = res.reverse();
    })
  }

  ngOnInit() {
    this.getEntries();
    

  }


 

}