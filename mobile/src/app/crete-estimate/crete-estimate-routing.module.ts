import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreteEstimatePage } from './crete-estimate.page';

const routes: Routes = [
  {
    path: '',
    component: CreteEstimatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreteEstimatePageRoutingModule {}
