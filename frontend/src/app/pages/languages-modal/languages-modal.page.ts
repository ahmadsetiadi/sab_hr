/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-languages-modal',
  templateUrl: './languages-modal.page.html',
  styleUrls: ['./languages-modal.page.scss'],
})
export class LanguagesModalPage implements OnInit {
  selected: any = 'English (US)';
  constructor(
    private modalController: ModalController,
    public util: UtilService,
    private navParam: NavParams
  ) {
    if (this.navParam.get('name') != 'Choose Language') {
      this.selected = this.navParam.get('name');
    }
  }

  ngOnInit() {
  }

  onClose(type: any) {
    this.modalController.dismiss(type, type);
  }

}
