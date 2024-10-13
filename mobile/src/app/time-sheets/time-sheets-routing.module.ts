import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeSheetsPage } from './time-sheets.page';

const routes: Routes = [
  {
    path: '',
    component: TimeSheetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeSheetsPageRoutingModule {}
