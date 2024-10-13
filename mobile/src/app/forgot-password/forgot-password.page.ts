import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { AlertController, NavController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  public loading;
  public url;
  public token;
  public colorCode: any;
  blackLogo: any;
  primaryColor: any;
  public keywords: any = {};
  forgotpasswordForm: FormGroup
  constructor(public util: UtilService, public alertController: AlertController,
    public navCtrl: NavController, public fb: FormBuilder, public referenceservice: UtilService,
    public apiservice: ApiService) {
    this.forgotpasswordForm = fb.group({
      'username': [null, Validators.compose([Validators.required])]
    });
    this.blackLogo = "assets/imgs/Logo-new.png";
  }

  ngOnInit() {
  }
  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };
  forgotPassword() {
    this.referenceservice.showAlert('Smart HR', 'Email has been sent successfully please check your mail');
    this.navCtrl.pop();
  }
  backToLogin() {
    this.navCtrl.pop();
  };
}
