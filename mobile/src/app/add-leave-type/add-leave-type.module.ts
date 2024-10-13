import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLeaveTypePageRoutingModule } from './add-leave-type-routing.module';

import { AddLeaveTypePage } from './add-leave-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLeaveTypePageRoutingModule
  ],
  declarations: [AddLeaveTypePage]
})
export class AddLeaveTypePageModule {}
