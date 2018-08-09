import {Component, OnInit } from '@angular/core';

import {ProjectService}         from '../../services/project.service';
import {HttpClient }        from '@angular/common/http';
import {FormsModule}         from '@angular/forms';
// images:
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router'

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
