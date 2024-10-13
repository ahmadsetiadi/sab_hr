import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-time-sheets',
  templateUrl: './time-sheets.page.html',
  styleUrls: ['./time-sheets.page.scss'],
})
export class TimeSheetsPage implements OnInit {
  timeSheets: any;
  constructor(public navContrl: NavController, public util: UtilService, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.timeSheets = [{ name: "Steve Smith", date: "2018-04-15", projectName: "newhrms", hours: "1 Hours", description: "just for testing" },
    { name: "Steve Smith", date: "2018-06-15", projectName: "newhrms", hours: "1 Hours", description: "just for testing" },
    { name: "Steve Smith", date: "2018-07-25", projectName: "newhrms", hours: "5 Hours", description: "just for testing" },
    { name: "Steve Smith", date: "2018-08-05", projectName: "newhrms", hours: "4 Hours", description: "just for testing" },
    { name: "Steve Smith", date: "2018-09-15", projectName: "newhrms", hours: "2 Hours", description: "just for testing" },
    { name: "Steve Smith", date: "2018-10-12", projectName: "newhrms", hours: "8 Hours", description: "just for testing" },
    { name: "Steve Smith", date: "2018-11-18", projectName: "newhrms", hours: "4 Hours", description: "just for testing" },
    { name: "Steve Smith", date: "2018-12-14", projectName: "newhrms", hours: "9 Hours", description: "just for testing" },
    { name: "Steve Smith", date: "2018-10-02", projectName: "newhrms", hours: "10 Hours", description: "just for testing" }]
  }
  details(detail) {
    detail = JSON.stringify(detail);
    this.navContrl.navigateForward("/time-sheets-details/" + detail, { skipLocationChange: true });
    // this.navContrl.navigateForward(`/time-sheets-details/${detail}`);

  }
}
