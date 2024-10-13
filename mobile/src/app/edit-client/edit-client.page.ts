import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, Events } from '@ionic/angular';
import { UtilService } from '../util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.page.html',
  styleUrls: ['./edit-client.page.scss'],
})
export class EditClientPage implements OnInit {
  public selected;
  public selected1;
  public loading;
  public url;
  public token;
  public resp;
  public departments;
  public designation;
  public username1 = false;
  public email1 = false;
  public phone1 = false;
  public designate = false;
  public clientid;
  public client: any = {};
  public primaryColor: any;
  public dept: any;
  public clientdata: any = {};
  basicInformation = true;
  contactInformation = false;
  webInformation = false;
  bankInformation = false;
  hostInformation = false;
  keywords: any;
  constructor(public activeRoute: ActivatedRoute, public referenceService: UtilService,
    public apiService: ApiService, public navCtrl: NavController, public navParam: NavParams) {
    //console.log(id)
    this.primaryColor = localStorage.getItem('primary_color');
    this.keywords = JSON.parse(localStorage.getItem('keywords'));
  }

  ngOnInit() {
    this.clientdata = this.navParam.get('client');
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


  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };


  submit() {
    this.referenceService.showAlert('Smart HR', 'Client Updated successfully');
    this.referenceService.dismissModal();
  }
}
