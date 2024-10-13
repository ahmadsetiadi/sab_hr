import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-add-leave-type',
  templateUrl: './add-leave-type.page.html',
  styleUrls: ['./add-leave-type.page.scss'],
})
export class AddLeaveTypePage implements OnInit {

  constructor(public navCntrl: NavController, public alertController: AlertController, public util: UtilService) { }

  ngOnInit() {
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: '<strong> Leave Type Added Successfully </strong>',
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
