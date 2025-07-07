import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { register } from 'swiper/element';
import { ConfigService } from 'src/app/services/config.service';
import * as moment from 'moment'; // Mengimpor Moment.js
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

register();
@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.page.html',
  styleUrls: ['./leave-list.page.scss'],
})
export class LeaveListPage implements OnInit {
  @ViewChild('dateSelect', { static: false }) dateSelect: IonSelect;

  datasource: any = [];
  datasourceSummary : any = [];
  search : string = "";
  startdate: string;
  enddate: string;


  selectedComboDate: any =  { id: 1, name: "This Month"};
  showSelect: boolean = false; 
  selectedComboMonth: any =  { id: 2, name: "February"};

  segment: string = 'transaction'; //'summary';

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

  currentYear : number = new Date().getFullYear();
  selectedYear : number = this.currentYear;
  years: number[] = [];
  employees = [
    {
      name: 'Adi Nugroho',
      position: 'Software Engineer',
      period: '01 Jan - 31 Des',
      totalLeave: 12,
      leaveTaken: 6,
      sickLeave: 2,
      permitLeave: 1,
      publicLeave: 4,
      availableLeave: 5,
    },
    {
      name: 'Budi Santoso',
      position: 'HR Manager',
      period: '01 Jan - 31 Des',
      totalLeave: 14,
      leaveTaken: 10,
      sickLeave: 0,
      permitLeave: 1,
      publicLeave: 5,
      availableLeave: 3,
    },
    // ...tambahkan data lainnya
  ];

  constructor(
    public util: UtilService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private loading: LoadingController,
    public config: ConfigService,
  ) { 
    
  }

  ngOnInit() {
    for (let y = this.currentYear; y >= 2024; y--) {
      this.years.push(y);
    }
    
    this.selectedComboDate =  { id: 1, name: "This Month"}; //console.log(this.selectedComboDate);    
    this.selectedComboMonth = this.config.getselectedComboMonth();
    // this.loadData();
    const tahun : string = moment().format('YYYY'); 
    // this.selectedYear = tahun;    
    const dates = this.config.updateMonths(this.selectedComboMonth.id, tahun); // Call the service to update dates    
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate
  }  
  ionViewWillEnter() {
    this.loadData();
    this.loadDataSummary();
    
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

  onSegmentChange() {
    this.ionViewWillEnter();
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
    const a = await this.config.put("/leave/"+id, {status_deleted: 1} );        
    this.loadData();
  }
  async approvedData(id: number) {
    const a = await this.config.put("/leave/"+id, {status: "APPROVED", userapproved: this.config.username} );        
    this.loadData();
  }
  async cancelData(id: number) {
    const a = await this.config.put("/leave/"+id, {status: "CANCEL", usercancel: this.config.username} );        
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

  nextYear() {
    this.selectedYear += 1; 
    this.loadDataSummary();
    // const tahun : string = this.enddate.substring(0,4);
    // const dates = this.config.nextMonth(this.selectedComboMonth.id, tahun); // Call the service to update dates
    // console.log(dates);
    // this.selectedComboMonth.id   = dates.id;
    // this.selectedComboMonth.name = dates.name;
    // this.startdate = dates.startdate; // Update startdate
    // this.enddate = dates.enddate; // Update enddate
    
  }

  prevYear() {
    this.selectedYear -= 1; 
    this.loadDataSummary();

    // const tahun : string = this.enddate.substring(0,4);
    // const dates = this.config.prevMonth(this.selectedComboMonth.id, tahun); // Call the service to update dates
    // console.log(dates);
    // this.selectedComboMonth.id   = dates.id;
    // this.selectedComboMonth.name = dates.name;
    // this.startdate = dates.startdate; // Update startdate
    // this.enddate = dates.enddate; // Update enddate
    // this.loadData();
  }

  async loadData() {
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();
    
    // const dates = this.config.updateDates(this.selectedComboDate.id); // Call the service to update dates
    // this.startdate = dates.startdate; // Update startdate
    // this.enddate = dates.enddate; // Update enddate

    const url = "/leave?startdate="+this.startdate+
                "&enddate="+this.enddate+
                "&username="+this.config.username+
                "&search="+this.search; //console.log(url);
    const a = await this.config.get(url);
    this.datasource = a;
    await loading.dismiss();
    console.log(this.datasource);        
  }
  async loadDataSummary() {
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();
    
    // const dates = this.config.updateDates(this.selectedComboDate.id); // Call the service to update dates
    // this.startdate = dates.startdate; // Update startdate
    // this.enddate = dates.enddate; // Update enddate

    const url = "/leave/summary?tahun="+this.selectedYear+    
                "&username="+this.config.username+           
                "&search="+this.search; console.log(url);
    const a = await this.config.get(url);
    this.datasourceSummary = a;
    await loading.dismiss();
    console.log(this.datasourceSummary);        
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
  
  async downloadExcel() {
    console.log(this.segment);
    if (this.segment=="transaction") {
      const loading = await this.loading.create({
        message: 'Please wait...',
        spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
      });
      await loading.present();
  
      this.downloadLeave().subscribe(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        loading.dismiss();
        a.href = url;      
        a.download = 'leave_data.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, error => {
        loading.dismiss();
        console.error('Error downloading the file', error);
      });
    } else {
      this.downloadExcelSummary();
    }
  }
  async downloadExcelSummary() {
      const loading = await this.loading.create({
        message: 'Please wait...',
        spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
      });
      await loading.present();
  
      this.downloadSummary().subscribe(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        loading.dismiss();
        a.href = url;      
        a.download = 'summaryleave_data.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, error => {
        loading.dismiss();
        console.error('Error downloading the file', error);
      });
  }

  downloadSummary(): Observable<Blob> {
      const url = this.config.getApiUrl() + "vleave/export/summary?tahun="+this.selectedYear+
                  "&username="+this.config.username+    
                  "&sendemail=0"+            
                  "&search="+this.search; console.log(url);
  
      return this.http.get(url, { responseType: 'blob' });      
  }

  downloadLeave(): Observable<Blob> {
      const url = this.config.getApiUrl() + "leave/export?startdate="+this.startdate+
                  "&enddate="+this.enddate+
                  "&username="+this.config.username+    
                  "&sendemail=0"+            
                  "&search="+this.search; console.log(url);
  
      return this.http.get(url, { responseType: 'blob' });      
  }


}
