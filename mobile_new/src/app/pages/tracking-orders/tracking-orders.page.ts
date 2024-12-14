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

@Component({
  selector: 'app-tracking-orders',
  templateUrl: './tracking-orders.page.html',
  styleUrls: ['./tracking-orders.page.scss'],
})
export class TrackingOrdersPage implements OnInit {

  constructor(
    private modalController: ModalController,
    public util: UtilService
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.modalController.dismiss();
  }

  getDiscountedPrice(price: any, discount: any) {
    var numVal1 = Number(price);
    var numVal2 = Number(discount) / 100;
    var totalValue = numVal1 - (numVal1 * numVal2)
    return totalValue.toFixed(2);
  }

}
