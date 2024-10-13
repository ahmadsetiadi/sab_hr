import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.page.html',
  styleUrls: ['./add-holiday.page.scss'],
})
export class AddHolidayPage implements OnInit {

  constructor(public util: UtilService) { }

  ngOnInit() {
  }
  save() {
    this.util.showAlert("Smart HR", "Holiday Added Successfully");
    this.util.dismissModal();
  }
}
