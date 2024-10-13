import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSalaryPageRoutingModule } from './add-salary-routing.module';

import { AddSalaryPage } from './add-salary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSalaryPageRoutingModule
  ],
  declarations: [AddSalaryPage]
})
export class AddSalaryPageModule {}
