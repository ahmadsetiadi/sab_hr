/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaimFormRoutingModule } from './claim-form-routing.module';

import { ClaimFormPage } from './claim-form.page';
import { IonicSelectableComponent } from 'ionic-selectable';
// IonicSelectableAddItemTemplateDirective
// import { IonicSelectableModule } from 'ionic-selectable';
// import { IonicSelectableComponent } from 'ionic-selectable';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaimFormRoutingModule,
    IonicSelectableComponent,
    // IonicSelectableAddItemTemplateDirective
    // IonicSelectableModule
  ],
  declarations: [ClaimFormPage],
})
export class ClaimFormPageModule { }
