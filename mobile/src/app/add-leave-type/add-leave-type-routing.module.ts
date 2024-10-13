import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLeaveTypePage } from './add-leave-type.page';

const routes: Routes = [
  {
    path: '',
    component: AddLeaveTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLeaveTypePageRoutingModule {}
