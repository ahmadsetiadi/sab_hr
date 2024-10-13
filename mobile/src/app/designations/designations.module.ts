import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesignationsPageRoutingModule } from './designations-routing.module';

import { DesignationsPage } from './designations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesignationsPageRoutingModule
  ],
  declarations: [DesignationsPage]
})
export class DesignationsPageModule {}
