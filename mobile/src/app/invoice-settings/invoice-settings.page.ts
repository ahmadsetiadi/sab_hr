import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-invoice-settings',
  templateUrl: './invoice-settings.page.html',
  styleUrls: ['./invoice-settings.page.scss'],
})
export class InvoiceSettingsPage implements OnInit {

  constructor(public navCntrl: NavController, public util: UtilService) { }

  ngOnInit() {
  }
  save() {
    this.util.showAlert("Smart HR", "Saved Successfully");
    this.util.dismissModal();
  }
}
