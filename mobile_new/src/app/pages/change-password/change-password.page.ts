/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  passwordView: boolean = false;
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.modalController.dismiss();
  }

  toggePassword() {
    this.passwordView = !this.passwordView;
  }

}
