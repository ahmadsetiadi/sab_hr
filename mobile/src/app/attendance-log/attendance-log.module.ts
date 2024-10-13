import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceLogPageRoutingModule } from './attendance-log-routing.module';

import { AttendanceLogPage } from './attendance-log.page';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceLogPageRoutingModule, NgCalendarModule
  ],
  declarations: [AttendanceLogPage]
})
export class AttendanceLogPageModule { }
