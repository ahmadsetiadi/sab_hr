/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import Swiper from 'swiper';
import { register } from 'swiper/element';

register();
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
})
export class ProductInfoPage implements OnInit {
  @ViewChild("swiper") swiper?: ElementRef<{ swiper: Swiper }>
  index: any = 0;
  name: any = '';
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
  };

  slideOptStandard = {
    initialSlide: 0,
    slidesPerView: 1.2,
    spaceBetween: 10,
  };
  price: any = 0;
  discount: any = 0;
  discountPercentage: any = 0;

  slideProducts = {
    initialSlide: 0,
    slidesPerView: 2.3,
    spaceBetween: 10,
  };

  cartList: any[] = [];

  addMe: boolean = false;
  constructor(
    public util: UtilService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((data: any) => {
      this.name = data.name;
      const datas = this.util.productsList.filter(x => x.name == this.name);
      console.log(datas);
      if (datas && datas.length) {
        const info = datas[0];
        this.price = info.price;
        this.discountPercentage = info.off;
        this.discount = this.getDiscountedPrice(info.price, info.off);
      }
    });
  }

  slideChanged(event: any) {
    this.index = this.swiper?.nativeElement.swiper.activeIndex;
  }

  ngOnInit() {
  }

  onBack() {
    this.util.onBack();
  }

  getDiscountedPrice(price: any, discount: any) {
    var numVal1 = Number(price);
    var numVal2 = Number(discount) / 100;
    var totalValue = numVal1 - (numVal1 * numVal2)
    return totalValue.toFixed(2);
  }

  onTopProduct(name: any) {
    const param: NavigationExtras = {
      queryParams: {
        name: name,
      }
    };
    this.util.navigateToPage('product-list', param);
  }

  onProductInfo(name: any) {
    const param: NavigationExtras = {
      queryParams: {
        name: name
      }
    };
    this.util.navigateToPage('product-info', param);
  }

  addToCart(name: any) {
    this.cartList.push(name);
  }

  onProductList(name: any, image: any) {
    const param: NavigationExtras = {
      queryParams: {
        name: name,
        image: image,
      }
    };
    this.util.navigateToPage('products-by-category', param);
  }

  addMeToCart() {
    this.addMe = true;
  }

  onCart() {
    this.util.navigateToPage('cart');
  }

}
