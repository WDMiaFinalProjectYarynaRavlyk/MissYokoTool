import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

    constructor(private myHttp: Http) { }

    getEntries(){
      return this.myHttp.get('http://localhost:3000/inventory',)
      .map((res)=> res.json())
    }

    addNewEntry(item){
      return this.myHttp.post('http://localhost:3000/inventory/create',item)
      .map((res)=>res.json());
    }

    getOneEntry(itemId, item){
      return this.myHttp.get('http://localhost:3000/inventory/'+ itemId, item)
      .map((res)=> res.json())
    }

    deleteEntry(itemId){
      return this.myHttp.post('http://localhost:3000/inventory/'+ itemId +'/delete', itemId)
      .map((res)=> res.json())
    }

    updateEntry (item, itemId){
      return this.myHttp.post('http://localhost:3000/inventory/'+ itemId +'/update', item, itemId)
      .map((res)=> res.json())
    }

}

