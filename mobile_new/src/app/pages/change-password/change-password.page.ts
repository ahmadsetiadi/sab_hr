/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { ConfigService } from 'src/app/services/config.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  postData: any = {
    username: '',
    newPassword: '',
  }
  newPassword: string= '';
  confirmPassword: string= '';
  passwordView: boolean = false;
  passwordView1: boolean = false;
  constructor(
    public config: ConfigService,
    public util: UtilService,
    private modalController: ModalController,
    private alert: AlertController,
    private loading: LoadingController,
  ) { }

  ngOnInit() {
  }

  onBack() {
    // this.modalController.dismiss();
    this.util.navigateRoot("/tabs/account");
  }

  toggePassword() {
    this.passwordView = !this.passwordView;
  }
  toggePassword1() {
    this.passwordView1 = !this.passwordView1;
  }

  async resetPassword() {
    this.postData.username = this.config.username;
    this.postData.newPassword = this.newPassword;

    if (!this.postData.username || !this.newPassword || !this.confirmPassword) {
      this.util.showToast("Please fill all data", "danger", "middle");      
      return;
    } else {      
      if (this.newPassword!=this.confirmPassword) {
        this.util.showToast("input password should be same", "danger", "middle");        
        return;
      }
    }
    
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();

    try {
      console.log(this.config.user_id);
      console.log(this.config.employee_id);
      console.log(this.postData);
      let a;
      a = await this.config.put(
        "/user/"+this.config.user_id, 
        {password: this.postData.newPassword}
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
