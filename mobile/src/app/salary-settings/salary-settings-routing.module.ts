import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalarySettingsPage } from './salary-settings.page';

const routes: Routes = [
  {
    path: '',
    component: SalarySettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalarySettingsPageRoutingModule {}
