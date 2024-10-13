import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilService } from '../util.service';
import { ApiService } from '../api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.page.html',
  styleUrls: ['./create-project.page.scss'],
})
export class CreateProjectPage implements OnInit {
  public selected;
  public selected1;
  public loading;
  public url;
  public token;
  public resp;
  public projectDetails: any = {};
  public designation;
  public designate = false;
  public username1 = false;
  public password1 = false;
  public email1 = false;
  public phone1 = false;
  projectForm: FormGroup;
  start = false;
  public primaryColor: any;
  proDateFrom: any;
  currentTime: any;
  year: any;
  day: any;
  month: any;
  public keywords: any = {};
  public fixed = false;
  constructor(public fb: FormBuilder,
    public apiService: ApiService, public referenceService: UtilService,
    public navCtrl: NavController) {
    this.projectForm = fb.group({
      'project_code': ['', [Validators.required]],
      'project_title': ['', [Validators.required]],
      'client': ['', [Validators.required]],
      'assign_lead': ['', Validators.compose([Validators.required])],
      'assign_to': [, Validators.compose([Validators.required])],
      'fixed_rate': ['', [Validators.required]],
      'start_date': ['', [Validators.required]],
      'due_date': ['', [Validators.required]],
      'hourly_rate': ['', [Validators.required]],
      'fixed_price': ['', [Validators.required]],
      'estimate_hours': ['', [Validators.required]],
      'description': ['', [Validators.required]],
    });
    this.currentTime = new Date();
    this.year = this.currentTime.getFullYear();
    this.month = this.currentTime.getMonth() + 1;
    this.day = this.currentTime.getDate();
    if (this.month < 10) { this.month = '0' + this.month; }
    if (this.day < 10) { this.day = '0' + this.day; }
    this.currentTime = this.year + '-' + this.month + '-' + this.day;
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ngOnInit() {
  }
  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  selectFrom() {
    this.proDateFrom = this.projectForm.value.start_date;
    this.start = true;
  };

  moveFocus(nextElement) {
    nextElement.setFocus();
  };

  addEmployee() {
    this.referenceService.showAlert('Smart HR', 'Project created successfully');
    this.referenceService.dismissModal();
  }

}
