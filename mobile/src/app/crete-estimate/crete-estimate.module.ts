import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreteEstimatePageRoutingModule } from './crete-estimate-routing.module';

import { CreteEstimatePage } from './crete-estimate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreteEstimatePageRoutingModule
  ],
  declarations: [CreteEstimatePage]
})
export class CreteEstimatePageModule {}
