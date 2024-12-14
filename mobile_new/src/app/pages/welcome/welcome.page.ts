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
import { DataService } from 'src/app/services/datastorage.service';
// import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  name: any = 'Choose Language';
  constructor(
    private modalController: ModalController,
    public util: UtilService,
    private data: DataService,
    // private config: ConfigService,
  ) { 
    this.data.loadconfig();
  }

  async ngOnInit() {
    console.log("tes2");
    const res = await this.data.logicsuccess(); console.log(res);
    if (res==true) {
      console.log("a1");
      this.util.navigateRoot('/tabs');
    } else {
      console.log("a2");
      this.util.navigateRoot('');
    }
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

  onAuth() {
    this.util.navigateRoot('auth');
  }

}
