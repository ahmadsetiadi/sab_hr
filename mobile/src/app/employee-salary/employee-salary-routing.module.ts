import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeSalaryPage } from './employee-salary.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeSalaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeSalaryPageRoutingModule {}
