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
import { LoadingController } from '@ionic/angular';


register();
@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.page.html',
  styleUrls: ['./claim-list.page.scss'],
})
export class ClaimListPage implements OnInit {
  @ViewChild('dateSelect', { static: false }) dateSelect: IonSelect;

  datasource: any = [];
  search : string = "";
  startdate: string;
  enddate: string;


  selectedComboDate: any =  { id: 1, name: "This Month"};
  showSelect: boolean = false; 
  selectedComboMonth: any =  { id: 2, name: "February"};


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
    private loading: LoadingController,
    public config: ConfigService,
  ) { }

  ngOnInit() {
    this.selectedComboDate =  { id: 1, name: "This Month"}; //console.log(this.selectedComboDate);    
    // this.loadData();
    const tahun : string = moment().format('YYYY'); 
    const dates = this.config.updateMonths(this.selectedComboMonth.id, tahun); // Call the service to update dates    
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate
  }  
  ionViewWillEnter() {
    this.loadData();
    // this.route.queryParams.subscribe((data: any) => {
    //   if (data.refresh=='true') {
    //     this.loadData();
    //   }    
    // });
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
  editData(data: any) {
    console.log(data.status.toUpperCase());
    if (data.status.toUpperCase()=='APPROVED' || data.status.toUpperCase()=='CANCEL') {
      console.log(data.status.toUpperCase());
      return;
    }
    // Navigasi ke halaman employee-form dengan mengirimkan employee_id sebagai parameter
    // this.util.navigateRoot(['/employee-form', { id: id }]);
    // this.router.navigate(['/employee-form', { id: id }]);
    const id = data.tcuti_id;
    const param: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.util.navigateToPage('leave-form', param);
  }
  async deleteData(data: any) {
    if (data.status.toUpperCase()=='APPROVED' || data.status.toUpperCase()=='CANCEL') {
      //console.log(data.status.toUpperCase());
      return;
    }

    const id = data.tcuti_id;
    const a = await this.http.put("/leave/"+id, {status_deleted: 1} );        
    this.loadData();
  }
  async approvedData(id: number) {
    const a = await this.http.put("/leave/"+id, {status: "APPROVED", userapproved: this.http.username} );        
    this.loadData();
  }
  async cancelData(id: number) {
    const a = await this.http.put("/leave/"+id, {status: "CANCEL", usercancel: this.http.username} );        
    this.loadData();
  }

  nextMonth() {
    const tahun : string = this.enddate.substring(0,4);
    const dates = this.config.nextMonth(this.selectedComboMonth.id, tahun); // Call the service to update dates
    console.log(dates);
    this.selectedComboMonth.id   = dates.id;
    this.selectedComboMonth.name = dates.name;
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate
    this.loadData();
  }

  prevMonth() {
    const tahun : string = this.enddate.substring(0,4);
    const dates = this.config.prevMonth(this.selectedComboMonth.id, tahun); // Call the service to update dates
    console.log(dates);
    this.selectedComboMonth.id   = dates.id;
    this.selectedComboMonth.name = dates.name;
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate
    this.loadData();
  }

  async loadData() {
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();
    
    // const dates = this.http.updateDates(this.selectedComboDate.id); // Call the service to update dates
    // this.startdate = dates.startdate; // Update startdate
    // this.enddate = dates.enddate; // Update enddate

    const url = "/leave?startdate="+this.startdate+
                "&enddate="+this.enddate+
                "&username="+this.http.username+
                "&search="+this.search; //console.log(url);
    const a = await this.http.get(url);
    this.datasource = a;
    await loading.dismiss();
    console.log(this.datasource);        
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
