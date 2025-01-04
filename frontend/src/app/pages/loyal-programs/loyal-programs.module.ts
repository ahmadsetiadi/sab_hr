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

import { LoyalProgramsPageRoutingModule } from './loyal-programs-routing.module';

import { LoyalProgramsPage } from './loyal-programs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoyalProgramsPageRoutingModule
  ],
  declarations: [LoyalProgramsPage]
})
export class LoyalProgramsPageModule { }
