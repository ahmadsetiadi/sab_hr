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
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

register();
@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.page.html',
  styleUrls: ['./loan-list.page.scss'],
})
export class LoanListPage implements OnInit {
  @ViewChild('dateSelect', { static: false }) dateSelect: IonSelect;

  datasource: any = [];
  search : string = "";
  startdate: string;
  enddate: string;

  selectedComboDate: any =  { id: 1, name: "This Month"};
  showSelect: boolean = false; 
  selectedComboMonth: any =  { id: 2, name: "February"};
  usergroupid : number = 0;

  constructor(
    public util: UtilService,
    private route: ActivatedRoute,
    public http: ConfigService,
    private httpclient: HttpClient,
    private loading: LoadingController,
    public config: ConfigService,
  ) { }

  ngOnInit() {
    this.usergroupid = this.http.user.id_usergroup;
    this.selectedComboDate =  { id: 1, name: "This Month"}; //console.log(this.selectedComboDate);    
    this.selectedComboMonth = this.config.getselectedComboMonth();
    // this.loadData();
    const tahun : string = moment().format('YYYY'); 
    const dates = this.config.updateMonths(this.selectedComboMonth.id, tahun); // Call the service to update dates    
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate
  }  
  ionViewWillEnter() {
    this.loadData();
  }

  toggleSelect() {
    this.dateSelect.open();
  }

  onSelectChange(event: any) {
    this.selectedComboDate = event.detail.value; // Update the selected option    
    this.showSelect = false; // Hide the select after selection
    this.loadData();
  }

  addData() {
    this.util.navigateToPage('loan-form');
  }
  editData(data: any) {
    const id = data.loan_id;
    const param: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.util.navigateToPage('loan-form', param);
  }
  async deleteData(id: number) {      
    const a = await this.http.put("/loan/"+id, {status_deleted: 1, useredited: this.http.username} );        
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

    const url = "/loan?startdate="+this.startdate+
                "&enddate="+this.enddate+
                "&username="+this.http.username+
                "&search="+this.search; console.log(url);
    const a = await this.http.get(url); console.log(a);
    this.datasource = a;
    await loading.dismiss();
    console.log(this.datasource);        
  }

  onBack() {
    this.util.navigateRoot("tabs/home");
  }

  downloadFile(): Observable<Blob> {
    const url = this.config.getApiUrl() + "vloan/export-to-excel?startdate="+this.startdate+
                "&enddate="+this.enddate+
                "&username="+this.config.username+    
                "&sendemail=0"+            
                "&search="+this.search; console.log(url);

    return this.httpclient.get(url, { responseType: 'blob' });  
  }
    
    
  async downloadExcel() {
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();

    this.downloadFile().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      loading.dismiss();
      a.href = url;
      a.download = 'loan.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, error => {
      loading.dismiss();
      console.error('Error downloading the file', error);
    });
  }
}
