import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditLeaveTypePageRoutingModule } from './edit-leave-type-routing.module';

import { EditLeaveTypePage } from './edit-leave-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditLeaveTypePageRoutingModule
  ],
  declarations: [EditLeaveTypePage]
})
export class EditLeaveTypePageModule {}
