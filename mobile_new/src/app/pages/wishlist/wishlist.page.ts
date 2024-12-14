/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { NavigationExtras } from '@angular/router';
import { AddWishlistPage } from '../add-wishlist/add-wishlist.page';
import { register } from 'swiper/element';
import { ModalController } from '@ionic/angular';

register();
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  selected: any = 'favourite';
  slideCategories = {
    initialSlide: 0,
    slidesPerView: 6,
    spaceBetween: 10,
  };
  constructor(
    public util: UtilService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  getDiscountedPrice(price: any, discount: any) {
    var numVal1 = Number(price);
    var numVal2 = Number(discount) / 100;
    var totalValue = numVal1 - (numVal1 * numVal2)
    return totalValue.toFixed(2);
  }

  async addNewWishlist() {
    const modal = await this.modalController.create({
      component: AddWishlistPage,
      cssClass: 'long-modal'
    });
    await modal.present();
  }

  onProductInfo(name: any) {
    const param: NavigationExtras = {
      queryParams: {
        name: name
      }
    };
    this.util.navigateToPage('product-info', param);
  }

}
