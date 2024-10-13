import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.page.html',
  styleUrls: ['./company-settings.page.scss'],
})
export class CompanySettingsPage implements OnInit {

  constructor(public navCntrl: NavController, public util: UtilService) { }

  ngOnInit() {
  }
  save() {
    this.util.showAlert("Smart HR", "Saved Successfully");
    this.util.dismissModal();
  }
}
