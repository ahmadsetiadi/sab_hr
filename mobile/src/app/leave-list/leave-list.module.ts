import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveListPageRoutingModule } from './leave-list-routing.module';

import { LeaveListPage } from './leave-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveListPageRoutingModule
  ],
  declarations: [LeaveListPage]
})
export class LeaveListPageModule {}
