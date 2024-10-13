import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDesignationPageRoutingModule } from './add-designation-routing.module';

import { AddDesignationPage } from './add-designation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDesignationPageRoutingModule
  ],
  declarations: [AddDesignationPage]
})
export class AddDesignationPageModule {}
