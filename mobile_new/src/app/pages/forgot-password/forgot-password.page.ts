/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { ConfigService } from 'src/app/services/config.service';
import { CountryCodePickerPage } from '../country-code-picker/country-code-picker.page';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  ccode: any = '🇮🇳 India';
  username: string = '';
  otp: string = '';
  otpp: string = '';
  newPassword: string='';
  user_id: number = 0;
  confirmPassword: string='';
  passwordView: boolean = false;
  passwordView1: boolean = false;
  constructor(
    public util: UtilService,
    private modalController: ModalController,
    private loading: LoadingController,
    public config: ConfigService,
  ) { }

  ngOnInit() {
  }

  async openCountryPicker() {
    const modal = await this.modalController.create({
      component: CountryCodePickerPage,
      cssClass: 'language-modal'
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      if (data && data.data && data.data != 'close') {
        const selected = this.util.countryCodes.filter(x => x.dial_code == data.data);
        console.log(selected);
        if (selected && selected.length) {
          this.ccode = selected[0].flag + ' ' + selected[0].name;
        }
      }
    });
    await modal.present();
  }

  onBack() {
    this.util.navigateRoot("/auth");
  }

  onVerify() {
    this.util.navigateToPage('verify-reset');
  }

  async getOTP() {
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();

    try {
      // console.log(this.config.user_id);
      // console.log(this.config.employee_id);
      // console.log(this.postData);
      let a;
      a = await this.config.get("/user/otp/"+this.username);   
      this.otp = "";   
      this.user_id = 0;  
      if (a==null) {
        console.log("get otp", a);
      } else {
        console.log(a);
        this.otp = a.otp;
        this.user_id = a.user_id;
        // console.log("get otp", a);
        // this.onBack();
      }               
    } catch (error) {
      console.error('Error loading data', error);
    } finally {      
      await loading.dismiss();
    }
  }

  toggePassword() {
    this.passwordView = !this.passwordView;
  }
  toggePassword1() {
    this.passwordView1 = !this.passwordView1;
  }

  async resetPassword() {    
    if (this.otp=="") {
      this.util.showToast("Please get OTP again", "danger", "middle");      
      return;
    }
    if (this.otp!=this.otpp) {
      this.util.showToast("not valid OTP, please get OTP again", "danger", "middle");      
      return;
    }

    if (!this.username || !this.newPassword || !this.confirmPassword) {
      this.util.showToast("Please fill all data", "danger", "middle");      
      return;
    } else {      
      if (this.newPassword!=this.confirmPassword) {
        this.util.showToast("input password should be same", "danger", "middle");        
        return;
      }
    }
    console.log("a");
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();
    console.log("b");
    console.log(this.newPassword);
    try {
      let a;
      a = await this.config.put(
        "/user/resetpassword/"+this.user_id, 
        {password: this.newPassword}
      );        
      if (a==null) {
        console.log("put", a);
      } else {
        this.util.showToast("Reset Password Success", "warning", "middle");
        console.log("put", a);
        this.onBack();
      }               
    } catch (error) {
      console.error('Error loading data', error);
    } finally {      
      await loading.dismiss();
    }
  }



}
