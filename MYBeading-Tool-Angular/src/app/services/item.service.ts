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
      return this.myHttp.post('http://localhost:3000/inventory/add', item,{ withCredentials: true })
      .map((res)=>res.json());
    }

    getOneEntry(itemId){
      return this.myHttp.get('http://localhost:3000/inventory/'+ itemId, { withCredentials: true })
      .map((res)=> res.json())
    }

    deleteEntry(itemId){
      return this.myHttp.post('http://localhost:3000/inventory/'+ itemId +'/delete', itemId, { withCredentials: true })
      .map((res)=> res.json())
    }

    updateOne (item){
      return this.myHttp.post('http://localhost:3000/inventory/'+ item._id +'/update', item, { withCredentials: true })
      .map((res)=> res.json())
    }

    itemAddToProject(data, usedQ) {
      return this.myHttp.post('http://localhost:3000/inventory/addtoproject', data, usedQ )
      .map((res)=> res.json())
    }

}

