import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewProjectsPageRoutingModule } from './view-projects-routing.module';

import { ViewProjectsPage } from './view-projects.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProjectsPageRoutingModule, CalendarModule
  ],
  declarations: [ViewProjectsPage]
})
export class ViewProjectsPageModule { }
