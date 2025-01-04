/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { register } from 'swiper/element';
import { IonicSelectableComponent } from 'ionic-selectable';
import { LoadingController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import * as moment from 'moment'; // Mengimpor Moment.js
import { AlertController } from '@ionic/angular';

register();
@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.page.html',
  styleUrls: ['./leave-form.page.scss'],
  // standalone: true, // Menandakan bahwa ini adalah komponen standalone
  // imports: [IonicSelectableComponent],  // Mengimpor IonicSelectableComponent
  
})
export class LeaveFormPage implements OnInit {
  leavetypes:any=[];
  search : string = "";
  leaveRequest = {    
    startdate: '2024-12-22',    
    enddate: '2024-12-22',
    takenleave: 1,
    description: '',
    leavetype_id: "1",
    employee_id: 0,
    employee: { id: 0, name: '' },
    status: "",
    userentry: "",
  };

  readonlyEmployee: boolean = false;

  employees : any = [];

  showDatePicker: boolean = false;
  showDatePicker2: boolean = false;
  id: number;
  constructor(
    public util: UtilService,
    public http: ConfigService,
    private loading: LoadingController,
    private alert: AlertController,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((data: any) => {
      const id = data.id;
      this.id = id ? +id : 0;  // Mengonversi ke number
      // console.log('Received employee_id:', this.id);
    });

    const today = moment().format('YYYY-MM-DD'); // Format tanggal sesuai kebutuhan
    this.leaveRequest.startdate = today;
    this.leaveRequest.enddate = today;

    this.leaveRequest.leavetype_id = "1"; // 1 corresponds to Annual Leave
    this.loadData();
    this.getTotalDays();
    
  }
  async loadData() {
    // console.log(this.http.username);

    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();

    try {
      let a;
      a = await this.http.get("employee/username/" + this.http.username);
      this.employees = a;

      a = await this.http.get("leave/leavetype");
      this.leavetypes = a; console.log(this.leavetypes);

      if (this.id!=0) {
        const b : any= await this.http.get("leave/"+this.id);
        // console.log(b);
        this.leaveRequest = {    
          startdate: b.startdate,    
          enddate: b.enddate,
          takenleave: b.takenleave,
          description: b.description,
          leavetype_id: b.leavetype_id.toString(),
          employee_id: b.employee_id,
          employee: { id: b.employee_id, name: b.name },
          status: b.status,
          userentry: b.userentry,
        };
        // console.log(this.leaveRequest);
      } 
      else {
        if (this.employees) {
          if (this.employees.length==1) {            
            this.leaveRequest.employee = this.employees[0]; 
            this.leaveRequest.employee_id = this.leaveRequest.employee.id;          
          }
        } else {
          this.employees = [ {id:0, name: ''} ];
          this.leaveRequest.employee = this.employees[0];
        }
        // console.log(this.leaveRequest);
      }  
      
      if (this.employees) {
        if (this.employees.length==1) {
          this.readonlyEmployee = true;  
        } else {
          this.readonlyEmployee = false;
        }
      } else {
        this.employees = [ {id:0, name: ''} ];
        this.leaveRequest.employee = this.employees[0];
      }
      // this.datas = a;
    } catch (error) {
      console.error('Error loading data', error);
    } finally {      
      await loading.dismiss();
    }
  }

  loadLeaveData(id: number) {

  }

  onStartChange() {
    this.showDatePicker = false;    
    
    // console.log(this.leaveRequest);  
    this.getTotalDays();
  }
  onEndChange() {
    this.showDatePicker2 = false;   
    this.getTotalDays(); 
    // console.log(this.leaveRequest.startdate);    
  }
  onEmployeeChange() {
    this.leaveRequest.employee_id = this.leaveRequest.employee.id;
    // this.getTotalDays();
    // console.log(this.leaveRequest);  
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
    this.util.navigateRoot("leave-list");
    // this.util.navigateRoot("leave-list", { queryParams: { refresh: true } });
    // this.util.navigateRoot("leave-list?refresh=true");


  }

  openStartDatePicker() {
    const datePicker : any = document.createElement('ion-datetime');
    datePicker.value = this.leaveRequest.startdate;
    datePicker.min = new Date().toISOString(); // Set minimum date to today
    datePicker.addEventListener('ionChange', (event: any) => {
      this.leaveRequest.startdate = event.detail.value;
    });

    document.body.appendChild(datePicker);
    datePicker.present();
  }

  async getTotalDays() {
    const url : string="leave/totaldays?startdate=" + this.leaveRequest.startdate + "&enddate=" + this.leaveRequest.enddate;
    // console.log(url);
    const a :any = await this.http.get(url);
    this.leaveRequest.takenleave = a.totalDays;
    // console.log
    // console.log(a);
  }
  async onSubmit() {
    this.leaveRequest.userentry = this.http.username;
    this.leaveRequest.employee_id = this.leaveRequest.employee.id;

    if (!this.leaveRequest.description || !this.leaveRequest.startdate || !this.leaveRequest.enddate || !this.leaveRequest.employee_id || !this.leaveRequest.leavetype_id || !this.leaveRequest.takenleave) {
      // Tampilkan alert jika ada field yang kosong
      const alert = await this.alert.create({
        header: 'Warning',
        message: 'Please fill all field',
        buttons: ['OK']
      });
      await alert.present();
      return; // Hentikan eksekusi lebih lanjut
    }
    if (this.leaveRequest.takenleave<=0 || this.leaveRequest.employee_id<=0 || this.leaveRequest.description=="") {
      const alert = await this.alert.create({
        header: 'Warning',
        message: 'Please fill all field',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }



    // console.log('Form Submitted', this.leaveRequest);

    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();

    try {
      if (this.id!=0) {
        let a;
        a = await this.http.put("/leave/"+this.id, this.leaveRequest);    
        // this.util.navigateRoot("leave-list?refresh=true");    
        this.util.navigateToPage("leave-list", { queryParams: { refresh: true } });

        // console.log("put", a);
      } else {
        let a;
        a = await this.http.post("/leave", this.leaveRequest);
        this.util.navigateToPage("leave-list", { queryParams: { refresh: true } });
        // console.log("post", a);
      }            
    } catch (error) {
      console.error('Error loading data', error);
    } finally {      
      await loading.dismiss();
    }
    // Tambahkan logika untuk mengirim data ke server atau melakukan tindakan lain
  }
}
