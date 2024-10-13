import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalarySettingsPageRoutingModule } from './salary-settings-routing.module';

import { SalarySettingsPage } from './salary-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalarySettingsPageRoutingModule
  ],
  declarations: [SalarySettingsPage]
})
export class SalarySettingsPageModule {}
