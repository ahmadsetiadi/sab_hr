import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEmployeePageRoutingModule } from './add-employee-routing.module';

import { AddEmployeePage } from './add-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, ReactiveFormsModule,
    AddEmployeePageRoutingModule
  ],
  declarations: [AddEmployeePage]
})
export class AddEmployeePageModule { }
