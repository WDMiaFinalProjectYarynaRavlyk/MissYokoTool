
  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import {ItemService} from '../../services/item.service';
  
  
  @Component({
    selector: 'app-one-item',
    templateUrl: './one-item.component.html',
    styleUrls: ['./one-item.component.css']
  })
  
  export class OneItemComponent implements OnInit {
  
    item:any ={};
  
    constructor(private theRoute: ActivatedRoute,
      private myService: ItemService) { }
  
    ngOnInit() {
      this.theRoute.params
        .subscribe((params) => {
          this.myService.getOneEntry(params['id'], this.item)
          .subscribe((theItem)=>{
            this.item = theItem
          })   
        });
    }
  
  }