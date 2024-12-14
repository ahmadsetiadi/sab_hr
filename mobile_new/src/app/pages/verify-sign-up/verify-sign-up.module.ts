/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifySignUpPageRoutingModule } from './verify-sign-up-routing.module';

import { VerifySignUpPage } from './verify-sign-up.page';
import { NgOtpInputModule } from 'ng-otp-input';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifySignUpPageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [VerifySignUpPage]
})
export class VerifySignUpPageModule { }
