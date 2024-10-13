import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UtilService } from '../util.service';
// import { ApiService } from '../api.service';
import { ApiService } from './../api2.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username1 = false;
  public password1 = false;
  public loginForm: FormGroup;
  public primaryColor: any;
  public secondryColor: any;

  public keywords: any = {};
  blackLogo: any;
  device_id: any;

  model:any = {
    username:"adi",
    password:"adi"
  }

  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    private fb: FormBuilder,
    public statusBar: StatusBar,
    private referenceservice: UtilService,
    private apiservice: ApiService,
    private storage: Storage
  ) {
    this.loginForm = fb.group({
      username: ["", [Validators.required,]],
      password: ["", [Validators.required,]],
      device_id: ["", []]
    });
    this.primaryColor = '#0A15D5';
    this.secondryColor = '#0cd1e8';
    this.blackLogo = "assets/imgs/Logo-new.png";
    localStorage.setItem("primary_color", '#44bbec');
    localStorage.setItem("secondry_color", '#0163fc');
    localStorage.setItem("black_logo", "assets/imgs/logo.png");
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString(this.primaryColor);
    this.primaryColor = localStorage.getItem("primary_color");
    this.menuCtrl.swipeEnable(false);
  }

  ngOnInit() {
  }
  forgotPassword() {
    this.navCtrl.navigateForward("/forgot-password");
  }

  async login() {
    const model :any = { username : this.model.username, password : this.model.password }; 
    const url = "user/login";        
    const response: any = await this.apiservice.postData<any>(url, model); //console.log(response);
    if (response==undefined) {
      return;
    }
    this.storage.set('username', response.username);
    this.storage.set('expired', response.expired);

    // localStorage.setItem("loginStatus", "true");
    // localStorage.setItem("role", "admin");
    // localStorage.setItem("role_id", "1");
    // localStorage.setItem("fullname", "Admin");
    // localStorage.setItem("user_id", '1');
    // localStorage.setItem("currency", 'INR');
    this.navCtrl.navigateRoot('/home');
  }
  register() {
    this.navCtrl.navigateForward("/register");
  }
}
