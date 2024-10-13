import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSalaryPageRoutingModule } from './edit-salary-routing.module';

import { EditSalaryPage } from './edit-salary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSalaryPageRoutingModule
  ],
  declarations: [EditSalaryPage]
})
export class EditSalaryPageModule {}
