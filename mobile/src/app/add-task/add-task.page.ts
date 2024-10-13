import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  constructor(public util: UtilService) { }

  ngOnInit() {
  }
  save() {
    this.util.showAlert("Smart HR", "Task Added Successfully");
    this.util.dismissModal();
  }
}
