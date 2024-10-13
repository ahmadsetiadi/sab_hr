import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProjectsPage } from './view-projects.page';

const routes: Routes = [
  {
    path: '',
    component: ViewProjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewProjectsPageRoutingModule {}
