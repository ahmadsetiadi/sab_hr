import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimatesPageRoutingModule } from './estimates-routing.module';

import { EstimatesPage } from './estimates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstimatesPageRoutingModule
  ],
  declarations: [EstimatesPage]
})
export class EstimatesPageModule {}
