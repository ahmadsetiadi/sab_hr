import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddHolidayPageRoutingModule } from './add-holiday-routing.module';

import { AddHolidayPage } from './add-holiday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddHolidayPageRoutingModule
  ],
  declarations: [AddHolidayPage]
})
export class AddHolidayPageModule {}
