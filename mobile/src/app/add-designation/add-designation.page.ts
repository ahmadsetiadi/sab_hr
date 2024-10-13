import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.page.html',
  styleUrls: ['./add-designation.page.scss'],
})
export class AddDesignationPage implements OnInit {

  constructor(public util: UtilService) { }

  ngOnInit() {
  }
  successAlert() {
    this.util.showAlert("Smart HR", "Designation Added Successfully");
    this.util.dismissModal();
  }
}
