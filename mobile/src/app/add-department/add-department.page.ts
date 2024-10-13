import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.page.html',
  styleUrls: ['./add-department.page.scss'],
})
export class AddDepartmentPage implements OnInit {

  constructor(public util: UtilService) { }

  ngOnInit() {
  }
  successAlert() {
    this.util.showAlert("Smart HR", "Depatment Added Successfully");
    this.util.dismissModal();
  }
}
