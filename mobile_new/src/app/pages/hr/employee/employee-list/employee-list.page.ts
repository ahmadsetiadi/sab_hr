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
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

register();
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
})
export class EmployeeListPage implements OnInit {
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
  usergroupid : number = 0;
  constructor(
    public util: UtilService,
    public http: ConfigService,
    private loading: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log("oninit");
    // this.search = "adi";
    this.loadData();
  }
  ionViewWillEnter() {
    // Logika yang dijalankan setiap kali halaman akan ditampilkan
    console.log("onview");
    this.route.queryParams.subscribe((data: any) => {
      // console.log(data);
      if (data.refresh=='true') {
        console.log('Halaman akan ditampilkan');
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
  addData() {
    const param: NavigationExtras = {
      queryParams: {
        id: 0
      }
    };
    this.util.navigateToPage('employee-form', param);
  }
  editData(data: any) {
    // Navigasi ke halaman employee-form dengan mengirimkan employee_id sebagai parameter
    // this.util.navigateRoot(['/employee-form', { id: id }]);
    // this.router.navigate(['/employee-form', { id: id }]);
    console.log(data.status_active);
    if (data.status_active==0 || data.status_active==undefined) {
      return;
    } else {
      const param: NavigationExtras = {
        queryParams: {
          id: data.employee_id
        }
      };
      this.util.navigateToPage('employee-form', param);
    }    
  }

  async deleteData(data:any) {
    const a = await this.http.put("/employee/"+data.employee_id, {
                // nip: data.nip,
                // name: data.name,
                // username: data.username,
                // password: data.password,
                // joindate: data.joindate,
                // ptkp: data.ptkp,
                resigndate: "2025-01-01", 
                resign_reason: " - ",
                resigntype_id: 1,
                status_active: 0,
                useredited: this.http.username,
                dateedited: new Date()
              }); console.log(a); 
    this.loadData();
  }
  async setActive(data:any) {
    const a = await this.http.put("/employee/"+data.employee_id, {
                // nip: data.nip,
                // name: data.name,
                // username: data.username,
                // password: data.password,
                // joindate: data.joindate,
                // ptkp: data.ptkp,
                resigndate: null, 
                resign_reason: "",
                resigntype_id: 0,
                status_active: 1,
                useredited: this.http.username,
                dateedited: new Date()
              }); console.log(a); 
    this.loadData();
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
        a = await this.http.get("employee?search=" + this.search + "&username="+this.http.username);
      } else {
        a = await this.http.get("employee?username="+this.http.username);
      }
      // console.log(this.http.user);
      // console.log(this.http.user.id_usergroup);
      this.usergroupid = this.http.user.id_usergroup;
      console.log(a);
      this.datas = a;
    } catch (error) {
      console.error('Error loading data', error);
    } finally {      
      await loading.dismiss();
    }
  }

  onBack() {
    // this.util.onBack();
    this.util.navigateRoot("tabs/home");
  }
  uploadPhoto(data) {
    // console.log(data.status_active);
    // if (data.status_active==0 || data.status_active==undefined) {
    //   return;
    // } else {
    //   const param: NavigationExtras = {
    //     queryParams: {
    //       id: data.employee_id
    //     }
    //   };
    //   this.util.navigateToPage('employee-photo', param);
    // }   
  }

}
