import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignationsPage } from './designations.page';

const routes: Routes = [
  {
    path: '',
    component: DesignationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignationsPageRoutingModule {}
