import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-location-settings',
  templateUrl: './location-settings.page.html',
  styleUrls: ['./location-settings.page.scss'],
})
export class LocationSettingsPage implements OnInit {

  constructor(public navCntrl: NavController,public util: UtilService) { }

  ngOnInit() {
  }
  save() {
    this.util.showAlert("Smart HR", "Saved Successfully");
    this.util.dismissModal();
  }
}
