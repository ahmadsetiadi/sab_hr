import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceSettingsPage } from './invoice-settings.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceSettingsPageRoutingModule {}
