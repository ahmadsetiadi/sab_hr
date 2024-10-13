import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-salary-settings',
  templateUrl: './salary-settings.page.html',
  styleUrls: ['./salary-settings.page.scss'],
})
export class SalarySettingsPage implements OnInit {

  constructor(public navCntrl: NavController, public util: UtilService, public alertController: AlertController) { }

  ngOnInit() {
  }
  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: '<strong> Salary Settings Updated Successfully </strong>',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    this.util.dismissModal();
    await alert.present();
  }

}
