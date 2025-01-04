/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { CountryCodePickerPage } from '../country-code-picker/country-code-picker.page';
import { ChangePasswordPage } from '../change-password/change-password.page';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  ccode: any = '🇮🇳 India';
  constructor(
    public util: UtilService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.util.onBack();
  }

  async openCountryPicker() {
    const modal = await this.modalController.create({
      component: CountryCodePickerPage,
      cssClass: 'language-modal'
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      if (data && data.data && data.data != 'close') {
        const selected = this.util.countryCodes.filter(x => x.dial_code == data.data);
        console.log(selected);
        if (selected && selected.length) {
          this.ccode = selected[0].flag + ' ' + selected[0].name;
        }
      }
    });
    await modal.present();
  }

  async openChangePassword() {
    const modal = await this.modalController.create({
      component: ChangePasswordPage,
      cssClass: 'long-modal'
    });
    await modal.present();
  }

}
