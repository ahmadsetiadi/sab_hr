import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-notification-settings',
  templateUrl: './notification-settings.page.html',
  styleUrls: ['./notification-settings.page.scss'],
})
export class NotificationSettingsPage implements OnInit {

  constructor(public navCntrl: NavController, public util: UtilService, public alertController: AlertController) { }

  ngOnInit() {
  }
  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: '<strong> Notification Settings Updated Successfully </strong>',
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
