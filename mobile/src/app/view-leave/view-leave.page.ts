import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-view-leave',
  templateUrl: './view-leave.page.html',
  styleUrls: ['./view-leave.page.scss'],
})
export class ViewLeavePage implements OnInit {

  constructor(public util: UtilService) { }

  ngOnInit() {
  }
  cancel() {
    this.util.showAlert("Smart HR", "Leave Request Cancelled");
    this.util.dismissModal();
  }
}
