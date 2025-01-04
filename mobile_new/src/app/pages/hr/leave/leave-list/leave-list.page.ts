/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { register } from 'swiper/element';
import { ConfigService } from 'src/app/services/config.service';
import * as moment from 'moment'; // Mengimpor Moment.js

register();
@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.page.html',
  styleUrls: ['./leave-list.page.scss'],
})
export class LeaveListPage implements OnInit {
  @ViewChild('dateSelect', { static: false }) dateSelect: IonSelect;

  datasource: any = [];
  search : string = "";
  startdate: string;
  enddate: string;


  selectedComboDate: any =  { id: 1, name: "This Month"};
  showSelect: boolean = false; 


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
  constructor(
    public util: UtilService,
    private route: ActivatedRoute,
    public http: ConfigService,
  ) { }

  ngOnInit() {
    this.selectedComboDate =  { id: 1, name: "This Month"}; //console.log(this.selectedComboDate);    
    // const today = moment().format('YYYY-MM-DD'); // Format tanggal sesuai kebutuhan
    // this.startdate = today;
    // this.enddate = today;

    
  
    // console.log("oninit");
    // this.search = "adi";
    this.loadData();
  }  
  ionViewWillEnter() {
    // console.log(this.http.combodate);
    // Logika yang dijalankan setiap kali halaman akan ditampilkan
    // console.log("onview");
    this.route.queryParams.subscribe((data: any) => {
      console.log(data);
      if (data.refresh=='true') {
        // console.log('Halaman akan ditampilkan');
        // console.log(this.search);
        this.loadData();
      } else {
        // console.log("abc");
      }
      // if (data.refresh) {
      //   this.loadData();
      // };
    });
  }

  toggleSelect() {
    this.dateSelect.open();
    // console.log("test");
    if (this.selectedComboDate.id==1) {

    }
    //this.showSelect = !this.showSelect; // Toggle the visibility
  }

  onSelectChange(event: any) {
    // console.log(this.selectedComboDate);
    // console.log(event.detail);
    this.selectedComboDate = event.detail.value; // Update the selected option
    // console.log(this.selectedComboDate);
    this.showSelect = false; // Hide the select after selection
    this.loadData();
  }

  addData() {
    // console.log("tes");
    this.util.navigateToPage('leave-form');
    // this.editData(7);
  }
  editData(id: number) {
    // Navigasi ke halaman employee-form dengan mengirimkan employee_id sebagai parameter
    // this.util.navigateRoot(['/employee-form', { id: id }]);
    // this.router.navigate(['/employee-form', { id: id }]);

    const param: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.util.navigateToPage('leave-form', param);
  }

  async loadData() {
    const dates = this.http.updateDates(this.selectedComboDate.id); // Call the service to update dates
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate

    const url = "/leave?startdate="+this.startdate+
                "&enddate="+this.enddate+
                "&username="+this.http.username+
                "&search="+this.search; //console.log(url);
    const a = await this.http.get(url);
    this.datasource = a;
    // console.log(this.datasource);        
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
    this.util.navigateRoot("tabs/home");
  }
}
