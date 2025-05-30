import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateInvoicePageRoutingModule } from './create-invoice-routing.module';

import { CreateInvoicePage } from './create-invoice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateInvoicePageRoutingModule, ReactiveFormsModule
  ],
  declarations: [CreateInvoicePage]
})
export class CreateInvoicePageModule { }
