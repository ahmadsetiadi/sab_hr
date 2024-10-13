import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceSettingsPageRoutingModule } from './invoice-settings-routing.module';

import { InvoiceSettingsPage } from './invoice-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceSettingsPageRoutingModule
  ],
  declarations: [InvoiceSettingsPage]
})
export class InvoiceSettingsPageModule {}
