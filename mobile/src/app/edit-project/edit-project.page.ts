import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.page.html',
  styleUrls: ['./edit-project.page.scss'],
})
export class EditProjectPage implements OnInit {
  public selected;
  public selected1;
  public loading;
  public url;
  public token;
  public resp;
  public projectDetails: any = {};
  public projectData: any = {};
  public username1 = false;
  public password1 = false;
  public email1 = false;
  public phone1 = false;
  projectForm: FormGroup;
  public primaryColor: any;
  public fixed = false;
  projectMember = [];
  showPage = false;
  public keywords: any = {};
  constructor(public referenceService: UtilService, public apiService: ApiService,
    public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.keywords = JSON.parse(localStorage.getItem('keywords'));
    this.projectForm = fb.group({
      'project_id': ['', [Validators.required]],
      'project_code': ['', [Validators.required]],
      'project_title': ['', [Validators.required]],
      'client': ['', [Validators.required]],
      'assign_lead': ['', Validators.compose([Validators.required])],
      'assign_to': ['', Validators.compose([Validators.required])],
      'fixed_rate': ['', [Validators.required]],
      'start_date': ['', [Validators.required]],
      'due_date': ['', [Validators.required]],
      'hourly_rate': ['', [Validators.required]],
      'fixed_price': ['', [Validators.required]],
      'estimate_hours': ['', [Validators.required]],
      'description': ['', [Validators.required]],
    });
    this.primaryColor = localStorage.getItem('primary_color');
    this.projectDetails = this.navParams.get('project');
    console.log(this.projectDetails);
    this.showPage = true;

    if (this.projectDetails.overviews.fixed_rate == 'No') {
      this.fixed = false;
    }
    else if (this.projectDetails.overviews.fixed_rate == 'Yes') {
      this.fixed = true;
    }
    this.projectDetails.overviews.project_team_members.forEach(element => {
      this.projectMember.push(element.user_id);
    });
  }

  ngOnInit() {
  }

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };


  moveFocus(nextElement) {
    nextElement.setFocus();
  };

  addEmployee() {
    this.referenceService.showAlert("Smart HR", 'Project Updated successfully');
    this.referenceService.dismissModal();
  }
}
