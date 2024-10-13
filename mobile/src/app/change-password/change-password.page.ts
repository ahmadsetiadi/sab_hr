import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  constructor(public navCntrl: NavController, public alertController: AlertController, public router: Router,
    public util: UtilService) { }

  ngOnInit() {
    console.log(this.router.getCurrentNavigation());
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: '<strong> Password Updated Successfully </strong>',
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
    this.navCntrl.navigateRoot("/home");
    await alert.present();
  }
}
