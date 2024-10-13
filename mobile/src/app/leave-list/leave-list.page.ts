import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.page.html',
  styleUrls: ['./leave-list.page.scss'],
})
export class LeaveListPage implements OnInit {

  constructor(public util: UtilService, public modalController: ModalController,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  async deleteLeaveType(msg) {
    const alert = await this.alertController.create({
      message: 'Do you want to ' + msg + ' this Leave',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
            this.successAlert(msg)
          }
        }
      ]
    });
    await alert.present();
  }

  async successAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: '<strong> Leave ' + msg + ' Successfully </strong>',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
}
