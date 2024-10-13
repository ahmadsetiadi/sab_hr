import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewEstimatesPageRoutingModule } from './view-estimates-routing.module';

import { ViewEstimatesPage } from './view-estimates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEstimatesPageRoutingModule
  ],
  declarations: [ViewEstimatesPage]
})
export class ViewEstimatesPageModule {}
