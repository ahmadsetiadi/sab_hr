import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeSalaryPageRoutingModule } from './employee-salary-routing.module';

import { EmployeeSalaryPage } from './employee-salary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeSalaryPageRoutingModule
  ],
  declarations: [EmployeeSalaryPage]
})
export class EmployeeSalaryPageModule {}
