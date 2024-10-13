import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeSheetsDetailsPageRoutingModule } from './time-sheets-details-routing.module';

import { TimeSheetsDetailsPage } from './time-sheets-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeSheetsDetailsPageRoutingModule
  ],
  declarations: [TimeSheetsDetailsPage]
})
export class TimeSheetsDetailsPageModule {}
