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
import { LanguagesModalPage } from '../languages-modal/languages-modal.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  name: any = 'English';
  constructor(
    public util: UtilService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.util.onBack();
  }

  async openLanguage() {
    const modal = await this.modalController.create({
      component: LanguagesModalPage,
      cssClass: 'language-modal',
      componentProps: { name: this.name }
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      if (data && data.data && data.data != 'close') {
        this.name = data.data;
      }
    });
    await modal.present();
  }

}
