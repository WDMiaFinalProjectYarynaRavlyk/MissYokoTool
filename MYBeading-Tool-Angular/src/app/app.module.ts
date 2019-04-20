import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { UserpageComponent } from './components/user/userpage/userpage.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { ListComponent } from './components/item/list/list.component';
import { OneItemComponent } from './components/item/one-item/one-item.component';
import { UpdateItemComponent } from './components/item/update-item/update-item.component';
import { AllProjectsComponent } from './components/project/all-projects/all-projects.component';
import { OneProjectComponent } from './components/project/one-project/one-project.component';
import { CreateProjectComponent } from './components/project/create-project/create-project.component';
import { UpdateProjectComponent } from './components/project/update-project/update-project.component';

import { AuthService } from './services/auth.service';
import { ItemService } from './services/item.service';
import { ProjectService } from './services/project.service';
// images setup:
import { FileUploadModule } from "ng2-file-upload";
import { SearchPipe } from './pipes/search.pipe';
import { environment } from '../environments/environment';




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'update', component: UpdateUserComponent },
  
  { path: 'inventory', component: ListComponent },
  { path: 'inventory/:id', component: OneItemComponent},
  { path: 'inventory/:id/update', component: UpdateItemComponent},
  
  
  { path: 'user/:id', component: UserpageComponent},

  { path: 'projects', component: AllProjectsComponent},
  { path: 'projects/:id', component: OneProjectComponent},
  { path: 'projects/:id/update', component: UpdateProjectComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserpageComponent,
    UpdateUserComponent,
    ListComponent,
    OneItemComponent,
    UpdateItemComponent,
    AllProjectsComponent,
    OneProjectComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
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
