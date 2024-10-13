import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeSheetsPageRoutingModule } from './time-sheets-routing.module';

import { TimeSheetsPage } from './time-sheets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeSheetsPageRoutingModule
  ],
  declarations: [TimeSheetsPage]
})
export class TimeSheetsPageModule {}
