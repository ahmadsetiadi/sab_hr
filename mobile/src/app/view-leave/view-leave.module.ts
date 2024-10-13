import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewLeavePageRoutingModule } from './view-leave-routing.module';

import { ViewLeavePage } from './view-leave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewLeavePageRoutingModule
  ],
  declarations: [ViewLeavePage]
})
export class ViewLeavePageModule {}
