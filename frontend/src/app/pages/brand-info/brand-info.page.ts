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
  selector: 'app-brand-info',
  templateUrl: './brand-info.page.html',
  styleUrls: ['./brand-info.page.scss'],
})
export class BrandInfoPage implements OnInit {
  name: any = '';
  image: any = '';
  constructor(
    private modalController: ModalController,
    public util: UtilService,
    private navParam: NavParams
  ) {
    this.name = this.navParam.get('name');
    this.image = this.navParam.get('image');
  }

  ngOnInit() {
  }

  onClose(action: any) {
    this.modalController.dismiss(action, action);
  }

}
