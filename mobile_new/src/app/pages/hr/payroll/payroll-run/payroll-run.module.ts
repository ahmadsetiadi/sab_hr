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

import { PayrollRunPageRoutingModule } from './payroll-run-routing.module';

import { PayrollRunPage } from './payroll-run.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayrollRunPageRoutingModule
  ],
  declarations: [PayrollRunPage]
})
export class PayrollRunPageModule { }
