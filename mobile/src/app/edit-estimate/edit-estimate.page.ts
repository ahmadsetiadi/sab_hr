import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-estimate',
  templateUrl: './edit-estimate.page.html',
  styleUrls: ['./edit-estimate.page.scss'],
})
export class EditEstimatePage implements OnInit {

  constructor(public util: UtilService, public alertController: AlertController) { }

  ngOnInit() {
  }
  async update() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: '<strong>Estimate Updated successfully</strong>',
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
