import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.page.html',
  styleUrls: ['./compose-mail.page.scss'],
})
export class ComposeMailPage implements OnInit {

  constructor(public util: UtilService) { }

  ngOnInit() {
  }
  send() {
    this.util.showAlert("Smart HR", "Mail Sent Successfully");
    this.util.popBack();
  }
}
