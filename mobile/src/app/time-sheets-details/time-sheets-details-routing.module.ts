import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeSheetsDetailsPage } from './time-sheets-details.page';

const routes: Routes = [
  {
    path: '',
    component: TimeSheetsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeSheetsDetailsPageRoutingModule {}
