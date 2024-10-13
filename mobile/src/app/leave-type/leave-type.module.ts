import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveTypePageRoutingModule } from './leave-type-routing.module';

import { LeaveTypePage } from './leave-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveTypePageRoutingModule
  ],
  declarations: [LeaveTypePage]
})
export class LeaveTypePageModule {}
