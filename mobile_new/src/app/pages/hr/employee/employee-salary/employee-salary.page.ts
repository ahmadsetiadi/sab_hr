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
import { LoadingController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import * as moment from 'moment';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { DecimalPipe } from '@angular/common';

register();
@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.page.html',
  styleUrls: ['./employee-salary.page.scss'],
  providers: [DecimalPipe]
})
export class EmployeeSalaryPage implements OnInit {
  currentYear : number = new Date().getFullYear();
  selectedYear : number = this.currentYear;
  years: number[] = [];

  showDateJoin: boolean = false;
  showDateDOB: boolean = false;

  companies: any = [];
  departments: any = [];
  positions: any = [];
  employeestatuss: any = [];
  jamsosteks: any = [];
  banks: any = [];  

  employee: any = {
    address : ""
    , agama : ""
    , age : 0
    , bank : {bank_id: 2, name: 'BNI', useradded: null, dateadded: null, useredited: null, dateedited: null}
    , bank_id : 0
    , bankaccountname : ""
    , bankaccountnumber : ""
    , company : {company_id: 1, code: 'SAB', name: 'CV Sinar Antar Bintang', npwp: '', address: ''}
    , company_id : 0
    , dateadded : null
    , dateedited : null
    , department : {department_id: 2, name: 'Sales', code: null, useradded: null, dateadded: null, useredited: null, dateedited: null}
    , department_id : 0
    , dob : null
    , email : ""
    , employee_id : 0
    , employeestatus : {employeestatus_id: 1, name: 'PKWTT', useradded: null, dateadded: null, useredited: null, dateedited: null}
    , employeestatus_id : 0
    , fingerid : ""
    , hp : ""
    , idnumber : null
    , idtype : ""
    , jamsostek : {jamsostek_id: 7, name: 'BPJS TK & KS 2', type: 'RATE', useradded: 'admin', dateadded: '2025-01-25T08:19:20.000Z', useredited:null, dateedited:null}
    , jamsostek_id : 0
    , joindate : null
    , married : ""
    , name : ""
    , nip : ""
    , no_bpjsks : ""
    , no_bpjstk : ""
    , npwp : ""
    , password : ""
    , photo : null
    , pob : ""
    , position : {position_id: 10, name: 'Sales Manager', useradded: null, dateadded: null, useredited: null, dateedited: null}
    , position_id : 0
    , ptkp : null
    , resign_reason : ""
    , resigndate : null
    , resigntype : null
    , resigntype_id : 0
    , sex : null
    , status : "Active"
    , status_active : 1
    , taxfinal : 2
    , taxirregular : 2
    , taxtype : 2
    , useradded : null
    , useredited : null
    , username : null
    , worklength : 0
  }

  // employee: any = {
  //   address : "Jl.Macan Raya 3 No1, rt 006/003, Harapan Jaya , Bekasi Utara, Kota Bekasi"
  //   , agama : "islam"
  //   , age : 25.5
  //   , bank : {bank_id: 2, name: 'BNI', useradded: null, dateadded: null, useredited: null, dateedited: null}
  //   , bank_id : 2
  //   , bankaccountname : "Agung Syahputra "
  //   , bankaccountnumber : "1332483062"
  //   , company : {company_id: 1, code: 'SAB', name: 'CV Sinar Antar Bintang', npwp: '', address: ''}
  //   , company_id : 1
  //   , dateadded : null
  //   , dateedited : null
  //   , department : {department_id: 2, name: 'Sales', code: null, useradded: null, dateadded: null, useredited: null, dateedited: null}
  //   , department_id : 2
  //   , dob : "1999-08-20"
  //   , email : "agung@sinarantarbintang.co.id "
  //   , employee_id : 11
  //   , employeestatus : {employeestatus_id: 1, name: 'PKWTT', useradded: null, dateadded: null, useredited: null, dateedited: null}
  //   , employeestatus_id : 1
  //   , fingerid : "000000003"
  //   , hp : ""
  //   , idnumber : null
  //   , idtype : ""
  //   , jamsostek : {jamsostek_id: 7, name: 'BPJS TK & KS 2', type: 'RATE', useradded: 'admin', dateadded: '2025-01-25T08:19:20.000Z', useredited:null, dateedited:null}
  //   , jamsostek_id : 7
  //   , joindate : "2021-04-01"
  //   , married : "Maried"
  //   , name : "Agung Syahputra "
  //   , nip : "SAB032024"
  //   , no_bpjsks : "3275032008980021"
  //   , no_bpjstk : "20067173946"
  //   , npwp : "944462696407000"
  //   , password : "8c52dd66d04eb816de72e180722562d3"
  //   , photo : null
  //   , pob : "Bekasi"
  //   , position : {position_id: 10, name: 'Sales Manager', useradded: null, dateadded: null, useredited: null, dateedited: null}
  //   , position_id : 10
  //   , ptkp : "K0"
  //   , resign_reason : ""
  //   , resigndate : null
  //   , resigntype : null
  //   , resigntype_id : 0
  //   , sex : "L"
  //   , status : "Active"
  //   , status_active : 1
  //   , taxfinal : 2
  //   , taxirregular : 2
  //   , taxtype : 2
  //   , useradded : null
  //   , useredited : null
  //   , username : "agung"
  //   , worklength : 3.83
  // }

  showDateGapok: boolean = false;
  showDateMeal: boolean = false;
  showDateLeave: boolean = false;

  dateGapok : any = null;
  dateMeal : any = null;
  dateLeave : any = null;
  gapok : number = 0;
  meal : number = 0;
  leave : number = 0;

  isWeb = false;
  displayValue: string;
  selectedImage: string | null = null;
  id: number;
  constructor(
    public util: UtilService,
    public http: ConfigService,
    private httpclient: HttpClient,
    private loading: LoadingController,
    private route: ActivatedRoute,
    private platform: Platform,
    private location: Location,
    private decimalPipe: DecimalPipe
  ) { 
    this.isWeb = this.platform.is('desktop') || this.platform.is('mobileweb');
  }

  onBack() {
    const param: NavigationExtras = {
      queryParams: {
        refresh: false
      }
    };
    this.util.navigateToPage('employee-list', param);

  }

  ngOnInit() {
    for (let y = this.currentYear; y >= 2024; y--) {
      this.years.push(y);
    }

    this.route.queryParams.subscribe((data: any) => {
      const id = data.id;
      this.id = id ? +id : 0;  // Mengonversi ke number
      console.log('Received employee_id:', this.id);
      this.loadData(this.id);
    });
  }
  ionViewWillEnter() {
    console.log("will enter");
    this.loadData(this.id);
    // this.loadDataSummary();    
  }

  async loadData(id: number) {    
    
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', 
    });
    await loading.present();

    try {
      this.gapok = 0;
      this.displayValue = "0";
      console.log(id);
      const a :any= await this.http.get("employee/salary/"+this.selectedYear+"/"+id); console.log(a);
      if (a) {
        if (a.basicsalary) {
          this.gapok = a.basicsalary;
          if (this.gapok !== null && !isNaN(this.gapok)) {
            this.displayValue = this.decimalPipe.transform(this.gapok, '1.0-0') || '';
          }
        }
      } 

      const b :any= await this.http.get("employee/"+id); console.log(a);
      if (b.employee) {
        this.employee = b.employee;
        console.log(this.employee);
      }

      // if (a.employee) {
      //   this.employee = a.employee;
      //   console.log(this.employee);
      // }
      

      // this.companies = a.company; console.log(this.companies);
      // this.departments = a.department;
      // this.positions = a.position;
      // this.employeestatuss = a.employeestatus;
      // this.jamsosteks = a.jamsostek;
      // this.banks = a.bank;
    } catch (error) {
      console.error('Error loading data', error);
    } finally {      
      await loading.dismiss();
    }
  }

  onFocus() {
    // Saat focus → tampilkan angka mentah
    this.displayValue = this.gapok !== null ? this.gapok.toString() : '';
  }

  onBlur() {
    // Saat blur → format angka
    if (this.gapok !== null && !isNaN(this.gapok)) {
      this.displayValue = this.decimalPipe.transform(this.gapok, '1.0-0') || '';
    }
  }

  onInput(event: any) {
    const val = event.target.value.replace(/,/g, ''); // hilangkan koma
    this.gapok = val ? Number(val) : 0;
  }

  prevYear() {
    this.selectedYear -= 1; 
    console.log('Received employee_id:', this.id);
    this.loadData(this.id);
  }
  nextYear() {
    this.selectedYear += 1; 
    console.log('Received employee_id:', this.id);
    this.loadData(this.id);
  }

  onDateGapokChange() {
    this.showDateGapok = false;
    this.dateGapok = moment(this.dateGapok).format('YYYY-MM-DD');
    // this.gapok = 0;
  }
  onDateMealChange() {
    this.showDateMeal = false;
  }
  onDateLeaveChange() {
    this.showDateLeave = false;
  }

  async onSave() {
      const postdata = {
        tahun: this.selectedYear,
        employeeid: this.id,
        basicsalary: this.gapok
      }

      const a :any= await this.http.post("employee/salary/basicsalary", postdata); console.log(a);
      if (a) {
        if (a.basicsalary) {
          this.gapok = a.basicsalary;
          if (this.gapok !== null && !isNaN(this.gapok)) {
            this.displayValue = this.decimalPipe.transform(this.gapok, '1.0-0') || '';
            console.log(this.displayValue);
            this.util.showToast("Saved", "success", "middle");
            setTimeout(() => {
              this.onBack();
            }, 2000); // 3000 ms = 3 detik
          } else {
            this.util.showToast("FAILED Saved", "danger", "middle");
          }
        } else {
          this.util.showToast("FAILED Saved", "danger", "middle");
        }
      } else {
        this.util.showToast("FAILED Saved", "danger", "middle");
      }
  }
}
