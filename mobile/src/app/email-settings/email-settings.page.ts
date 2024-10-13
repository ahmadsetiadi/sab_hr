import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.page.html',
  styleUrls: ['./email-settings.page.scss'],
})
export class EmailSettingsPage implements OnInit {
  constructor(public navCntrl: NavController, public util: UtilService) { }

  ngOnInit() {
  }

  save() {
    this.util.showAlert("Smart HR", "Saved Successfully");
    this.util.dismissModal();
  }
}
