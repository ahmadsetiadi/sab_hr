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
import * as moment from 'moment';
// import { format } from 'date-fns';

register();
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.page.html',
  styleUrls: ['./employee-form.page.scss'],
})
export class EmployeeFormPage implements OnInit {
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

  id: number;
  constructor(
    public util: UtilService,
    public http: ConfigService,
    private loading: LoadingController,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((data: any) => {
      const id = data.id;
      this.id = id ? +id : 0;  // Mengonversi ke number
      console.log('Received employee_id:', this.id);
      this.loadData(this.id);
    });
  }

  onJoinChange() {
    this.showDateJoin = false;  
    this.employee.joindate = moment(this.employee.joindate).format('YYYY-MM-DD');
  }
  onDOBChange() {
    this.showDateDOB = false;
    this.employee.dob = moment(this.employee.dob).format('YYYY-MM-DD');
  }

  async loadData(id: number) {    
    
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', 
    });
    await loading.present();

    try {
      const a :any= await this.http.get("employee/"+id); console.log(a);
      if (a.employee) {
        this.employee = a.employee;
        console.log(this.employee);
      }
      

      this.companies = a.company; console.log(this.companies);
      this.departments = a.department;
      this.positions = a.position;
      this.employeestatuss = a.employeestatus;
      this.jamsosteks = a.jamsostek;
      this.banks = a.bank;
    } catch (error) {
      console.error('Error loading data', error);
    } finally {      
      await loading.dismiss();
    }
  }

  onBack() {
    const param: NavigationExtras = {
      queryParams: {
        refresh: false
      }
    };
    this.util.navigateToPage('employee-list', param);

  }
  async onSave() {
    if (!this.employee.nip || !this.employee.company_id || !this.employee.name
        || !this.employee.username || !this.employee.password 
        || !this.employee.department_id || !this.employee.position_id
        || !this.employee.employeestatus_id || !this.employee.jamsostek_id 
        || !this.employee.joindate || !this.employee.ptkp ) {
      this.util.showToast("Please fill required field", "danger", "middle");
      return; // Hentikan eksekusi jika NIP kosong
    }
    console.log(this.employee);
    // return;
    let a: any;
    if (this.employee.employee_id==0) {
      a = await this.http.post("/employee", this.employee); console.log(a);
    } else {
      a = await this.http.put("/employee/"+this.employee.employee_id, this.employee); console.log(a);
    }
    
    if (a!=null && a.employee_id>0) {
        const param: NavigationExtras = {
          queryParams: {
            refresh: true
          }
        };
        this.util.navigateToPage('employee-list', param);
    }
  }
}
