import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { UserpageComponent } from './user/userpage/userpage.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListComponent } from './item/list/list.component';
import { OneItemComponent } from './item/one-item/one-item.component';
import { CreateItemComponent } from './item/create-item/create-item.component';
import { UpdateItemComponent } from './item/update-item/update-item.component';
import { AllProjectsComponent } from './project/all-projects/all-projects.component';
import { OneProjectComponent } from './project/one-project/one-project.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { UpdateProjectComponent } from './project/update-project/update-project.component';

import { AuthService } from './services/auth.service';
import { ItemService } from './services/item.service';
import { ProjectService } from './services/project.service';




const routes: Routes = [
  // { path: '', component: LoginComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserpageComponent,
    CreateUserComponent,
    ListComponent,
    OneItemComponent,
    CreateItemComponent,
    UpdateItemComponent,
    AllProjectsComponent,
    OneProjectComponent,
    CreateProjectComponent,
    UpdateProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ItemService, 
    AuthService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
