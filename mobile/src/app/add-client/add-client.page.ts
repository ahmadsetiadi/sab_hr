import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UtilService } from '../util.service';
import { ApiService } from '../api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.page.html',
  styleUrls: ['./add-client.page.scss'],
})
export class AddClientPage implements OnInit {
  public selected;
  public selected1;
  public loading;
  public url;
  public token;
  public resp;
  public departments;
  public designation;
  public designate = false;
  public username1 = false;
  public password1 = false;
  public email1 = false;
  public phone1 = false;
  public client: any = {};
  public keywords: any = {};
  employeeForm: FormGroup;
  public primaryColor: any;
  basicInformation = true;
  contactInformation = false;
  webInformation = false;
  bankInformation = false;
  hostInformation = false;
  constructor(public referenceService: UtilService,
    public apiService: ApiService, public navCtrl: NavController) {
    this.primaryColor = localStorage.getItem('primary_color');
    this.keywords = JSON.parse(localStorage.getItem('keywords'));
  }

  ngOnInit() {
  }
  contact() {
    this.basicInformation = false;
    this.contactInformation = true;
  }
  basic() {
    this.basicInformation = true;
    this.contactInformation = false;
  }
  web() {
    this.webInformation = true;
    this.contactInformation = false;
  }
  contactback() {
    this.webInformation = false;
    this.contactInformation = true;
  }
  bank() {
    this.webInformation = false;
    this.bankInformation = true;
  }
  webback() {
    this.webInformation = true;
    this.bankInformation = false;
  }

  host() {
    this.hostInformation = true;
    this.bankInformation = false;
  }
  bankback() {
    this.hostInformation = false;
    this.bankInformation = true;
  }

  moveFocus(nextElement) {
    nextElement.setFocus();
  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };
  submit() {
    this.referenceService.showAlert("Smart HR", 'Client Added successfully');
    this.referenceService.dismissModal();
  }
}
