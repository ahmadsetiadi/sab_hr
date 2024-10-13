import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  faUser = faUser;
  date: Date;
  punchedIn: Date;
  punchedOut: Date;
  day: any;
  hours: any;
  constructor(public util: UtilService) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.date = new Date("28 Nov 2018");
    this.day = days[this.date.getDay() + 1];
  }

  ngOnInit() {
  }
  punchIn() {
    this.punchedIn = new Date();
  }
  punchOut() {
    this.punchedOut = new Date();
    var diff = Math.floor(this.punchedOut.valueOf() - this.punchedIn.valueOf());
    var diffHrs = Math.floor((diff % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diff % 86400000) % 3600000) / 60000); // minutes
    this.hours = diffHrs + "." + diffMins + " Hours";
  }
}
