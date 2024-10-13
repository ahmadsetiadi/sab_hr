import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UtilService } from '../util.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-time-sheets-details',
  templateUrl: './time-sheets-details.page.html',
  styleUrls: ['./time-sheets-details.page.scss'],
})
export class TimeSheetsDetailsPage implements OnInit {
  taskDetails: any;
  constructor(public util: UtilService, public activeRoute: ActivatedRoute, public navContrl: NavController) {
  }


  ngOnInit() {
    if (this.activeRoute.snapshot.params.timeSheetTask) {
      this.taskDetails = JSON.parse(this.activeRoute.snapshot.params.timeSheetTask);
    }
    else {
      this.util.popBack();
    }
  }
  popBack() {
    this.navContrl.pop();
  }
}
