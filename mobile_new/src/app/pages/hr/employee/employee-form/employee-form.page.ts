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
import { register } from 'swiper/element';
import { ConfigService } from 'src/app/services/config.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

register();
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.page.html',
  styleUrls: ['./employee-form.page.scss'],
})
export class EmployeeFormPage implements OnInit {
  search : string = "";
  datas : any;
  // slideOpts = {
  //   initialSlide: 1,
  //   speed: 400,
  //   slidesPerView: 1.2,
  //   spaceBetween: 10,
  //   centeredSlides: true
  // };

  // slideCategories = {
  //   initialSlide: 0,
  //   slidesPerView: 4,
  //   spaceBetween: 10,
  // };

  // slideBrands = {
  //   initialSlide: 0,
  //   slidesPerView: 4.5,
  //   spaceBetween: 10,
  // };

  // slideProducts = {
  //   initialSlide: 0,
  //   slidesPerView: 2.3,
  //   spaceBetween: 10,
  // };

  // cartList: any[] = [];

  id: number;
  constructor(
    public util: UtilService,
    public http: ConfigService,
    private loading: LoadingController,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  // ngOnInit() {
  //   // this.search = "adi";
  //   this.loadData();
  // }
  ngOnInit() {
    // Mengambil employee_id dari parameter route
    // this.route.paramMap.subscribe(params => {
    //   const id = params.get('id');
    //   this.id = id ? +id : 0;  // Mengonversi ke number
    //   console.log('Received employee_id:', this.id);
    //   // Lakukan sesuatu dengan employeeId, seperti memuat data karyawan
    // });

    this.route.queryParams.subscribe((data: any) => {
      const id = data.id;
      this.id = id ? +id : 0;  // Mengonversi ke number
      console.log('Received employee_id:', this.id);
    });
  }


  async loadData() {    
    // if (this.search!="") {
    //   const a = await this.http.get("employee?search="+this.search); console.log(a);
    //   this.datas = a;
    // } else {
    //   const a = await this.http.get("employee"); console.log(a);
    //   this.datas = a;
    // }
    // Tampilkan loading spinner
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();

    try {
      let a;
      if (this.search !== "") {
        a = await this.http.get("employee?search=" + this.search);
      } else {
        a = await this.http.get("employee");
      }
      // console.log(a);
      this.datas = a;
    } catch (error) {
      console.error('Error loading data', error);
    } finally {      
      await loading.dismiss();
    }
  }

  getDiscountedPrice(price: any, discount: any) {
    var numVal1 = Number(price);
    var numVal2 = Number(discount) / 100;
    var totalValue = numVal1 - (numVal1 * numVal2)
    return totalValue.toFixed(2);
  }

  addToCart(name: any) {
    // this.cartList.push(name);
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

  onCart() {
    this.util.navigateToPage('cart');
  }

  onBack() {
    // this.location.back();
    // this.util.onBack();
    const param: NavigationExtras = {
      queryParams: {
        refresh: false
      }
    };
    this.util.navigateToPage('employee-list', param);

  }
  onSave() {
    // this.util.navigateRoot("employee-list");
    // this.util.onBack();
    // this.util.navigateRoot("employee-list");
    const param: NavigationExtras = {
      queryParams: {
        refresh: true
      }
    };
    this.util.navigateToPage('employee-list', param);
  }
}
