import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ItemService} from '../../../services/item.service';

import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

item:any = {};

itemId; any;

theError:any;
   
constructor(private theRoute: ActivatedRoute,
  private homeRouter: Router, 
  private myService: ItemService) { }


  myCoolUploader = new FileUploader({
 
    // url: environment.apiBase + "/signup",  ${environment.apiBase}
     url: 'http://localhost:3000/inventory/update/',
    itemAlias: "theImage"
    
  });


    updateOne(){
        console.log('item in update: ', this.item)
    
        this.myCoolUploader.onBuildItemForm = (item, form) => {
            console.log('on build form')
            form.append("title", this.item.title);
            form.append("price", this.item.price);
            form.append("quantity", this.item.quantity);
            form.append("shortdescription", this.item.shortdescription);
            form.append("description", this.item.description);
            
          }
          this.myCoolUploader.onSuccessItem = (item) =>{
            console.log('on success form')

            this.homeRouter.navigate(["/inventory/" + this.item._id]);
          }
          this.myCoolUploader.onErrorItem = (item) => {
            console.log('on error form')

          this.theError = "Saving entry with image went bad. Sorry!";
          }
          this.myCoolUploader.uploadAll();

    }
  
    ngOnInit() {
      this.theRoute.params.subscribe(params => {
        this.getTheItem(params['id'])
      })
    }

    getTheItem(id){
      this.myService.getOneEntry(id)
      .toPromise()
      .then( itemFromDb => {
        this.item = itemFromDb;
        this.itemId = this.item._id;
        console.log('itemId is: ', this.itemId)
      } )
      .catch( err => console.log('err in getting item details: ', err) )
    }


    fileSelected(id){
      console.log('in the change :', id)
      this.myCoolUploader.onBeforeUploadItem = (item) => {
        item.withCredentials = false;
        item.url = item.url + `${id}`;
      }
    }

}
