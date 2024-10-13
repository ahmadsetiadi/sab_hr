import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditLeaveTypePage } from './edit-leave-type.page';

const routes: Routes = [
  {
    path: '',
    component: EditLeaveTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLeaveTypePageRoutingModule {}
