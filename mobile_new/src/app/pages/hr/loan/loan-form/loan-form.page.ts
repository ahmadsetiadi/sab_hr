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
  selector: 'app-loan-form',
  templateUrl: './loan-form.page.html',
  styleUrls: ['./loan-form.page.scss'],
  // standalone: true, // Menandakan bahwa ini adalah komponen standalone
  // imports: [IonicSelectableComponent],  // Mengimpor IonicSelectableComponent
  
})
export class LoanFormPage implements OnInit {
  search : string = "";
  loan = {    
    startdate: '2024-12-22',        
    employee_id: 0,
    nip: "",
    employee: { id: 0, name: '' },
    total: 0,
    bulan: 0,
    amount: 0,
    sudahbayar: 0,
    sisa: 0,
    tipe:"",
    keterangan: "",
    useradded: "",
    useredited: "",
  };

  readonlyEmployee: boolean = false;

  employees : any = [];

  showDatePicker: boolean = false;
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
    this.loan.startdate = today;
    this.loadData();
    
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

      if (this.id!=0) {
        const b : any= await this.http.get("loan/"+this.id);
        console.log(b);
        
    
        this.loan = {    
          startdate: b.startdate,    
          employee_id: b.employee_id,
          employee: { id: b.employee_id, name: b.employee.name },   
          nip: b.nip,       
          keterangan: b.keterangan,
          total: b.total,
          bulan: b.bulan,
          amount: b.amount,
          sudahbayar: b.sudahbayar,
          sisa: b.sisa,
          tipe: b.tipe,
          useradded: b.useradded,
          useredited: b.useredited,
        };
        console.log(this.loan);
      } 
      else {
        if (this.employees) {
          if (this.employees.length==1) {            
            this.loan.employee = this.employees[0]; 
            this.loan.employee_id = this.loan.employee.id;          
          }
        } else {
          this.employees = [ {id:0, name: ''} ];
          this.loan.employee = this.employees[0];
        }
        console.log(this.loan);
      }  
      
      if (this.employees) {
        if (this.employees.length==1) {
          this.readonlyEmployee = true;  
        } else {
          this.readonlyEmployee = false;
        }
      } else {
        this.employees = [ {id:0, name: ''} ];
        this.loan.employee = this.employees[0];
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
    // this.getTotalDays();
  }
  
  onEmployeeChange() {
    // this.leaveRequest.employee_id = this.leaveRequest.employee.id;
    // this.getTotalDays();
    // console.log(this.leaveRequest);  
  }

  openStartDatePicker() {
    const datePicker : any = document.createElement('ion-datetime');
    datePicker.value = this.loan.startdate;
    datePicker.min = new Date().toISOString(); // Set minimum date to today
    datePicker.addEventListener('ionChange', (event: any) => {
      this.loan.startdate = event.detail.value;
    });

    document.body.appendChild(datePicker);
    datePicker.present();
  }

  async onSubmit() {
    this.loan.useradded = this.http.username;
    this.loan.employee_id = this.loan.employee.id;

    console.log(this.loan);
    if (!this.loan.keterangan || !this.loan.startdate || !this.loan.employee_id || !this.loan.total) {
      // Tampilkan alert jika ada field yang kosong
      const alert = await this.alert.create({
        header: 'Warning',
        message: 'Please fill all field',
        buttons: ['OK']
      });
      await alert.present();
      return; // Hentikan eksekusi lebih lanjut
    }
    if (this.loan.bulan<=0 || this.loan.amount<=0) {
      const alert = await this.alert.create({
        header: 'Warning',
        message: 'Please fill all field',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();

    try {
      if (this.id!=0) {
        let a;
        a = await this.http.put("/loan/"+this.id, this.loan);        
        console.log("put", a);
      } else {
        let a;
        a = await this.http.post("/loan", this.loan);
        console.log("post", a);
      }           
      this.onBack(); 
    } catch (error) {
      console.error('Error loading data', error);
    } finally {      
      await loading.dismiss();
    }
    // Tambahkan logika untuk mengirim data ke server atau melakukan tindakan lain
  }

  onBack() {
    this.util.navigateRoot("loan-list");
  }
}
