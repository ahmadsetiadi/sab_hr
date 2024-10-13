import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDesignationPage } from './add-designation.page';

const routes: Routes = [
  {
    path: '',
    component: AddDesignationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDesignationPageRoutingModule {}
