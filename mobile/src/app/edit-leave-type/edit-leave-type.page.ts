import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-edit-leave-type',
  templateUrl: './edit-leave-type.page.html',
  styleUrls: ['./edit-leave-type.page.scss'],
})
export class EditLeaveTypePage implements OnInit {

  constructor(public navCntrl: NavController, public alertController: AlertController, public util: UtilService) { }

  ngOnInit() {
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: '<strong>Leave Type Updated successfully</strong>',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    this.util.popBack();
    await alert.present();
  }
}
