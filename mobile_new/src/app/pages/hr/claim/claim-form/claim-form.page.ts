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
  selector: 'app-claim-form',
  templateUrl: './claim-form.page.html',
  styleUrls: ['./claim-form.page.scss'],
  // standalone: true, // Menandakan bahwa ini adalah komponen standalone
  // imports: [IonicSelectableComponent],  // Mengimpor IonicSelectableComponent
  
})
export class ClaimFormPage implements OnInit {
  
  search : string = "";
  claim = {    
    tdate: '2024-12-22',    
    employee_id: 0,
    employee: { id: 0, name: '' },
    salary_id: 35,
    amount : 0,
    description: '',
    useradded:'',
  };

  readonlyEmployee: boolean = false;

  employees : any = [];

  showDatePicker: boolean = false;
  // showDatePicker2: boolean = false;
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
    this.claim.tdate = today;

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
        const b : any= await this.http.get("claim/"+this.id);
        console.log(b);
        this.claim = {    
          tdate: b.tdate,    
          employee_id: b.employee_id,
          employee: { id: b.employee_id, name: b.employee.name },          
          description: b.description,
          salary_id: b.salary_id,
          amount: b.amount,    
          useradded: b.useradded   
        };
        // console.log(this.leaveRequest);
      } 
      else {
        if (this.employees) {
          if (this.employees.length==1) {            
            this.claim.employee = this.employees[0]; 
            this.claim.employee_id = this.claim.employee.id;          
          }
        } else {
          this.employees = [ {id:0, name: ''} ];
          this.claim.employee = this.employees[0];
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
        this.claim.employee = this.employees[0];
      }
      // this.datas = a;
    } catch (error) {
      console.error('Error loading data', error);
    } finally {      
      await loading.dismiss();
    }
  }

  onStartChange() {
    this.showDatePicker = false;        
  }

  onEmployeeChange() {
    this.claim.employee_id = this.claim.employee.id; 
  }
  
  onBack() {
    this.util.navigateRoot("claim-list");
  }

  openStartDatePicker() {
    const datePicker : any = document.createElement('ion-datetime');
    datePicker.value = this.claim.tdate;
    datePicker.min = new Date().toISOString(); // Set minimum date to today
    datePicker.addEventListener('ionChange', (event: any) => {
      this.claim.tdate = event.detail.value;
    });

    document.body.appendChild(datePicker);
    datePicker.present();
  }

  async onSubmit() {
    this.claim.useradded = this.http.username;
    this.claim.employee_id = this.claim.employee.id;

    if (!this.claim.description || !this.claim.tdate || !this.claim.employee_id || !this.claim.salary_id ) {
      // Tampilkan alert jika ada field yang kosong
      const alert = await this.alert.create({
        header: 'Warning',
        message: 'Please fill all field',
        buttons: ['OK']
      });
      await alert.present();
      return; // Hentikan eksekusi lebih lanjut
    }
    if (this.claim.salary_id<=0 || this.claim.employee_id<=0 || this.claim.description=="") {
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

    console.log(this.claim);
    try {
      if (this.id!=0) {
        let a;
        a = await this.http.put("/claim/"+this.id, this.claim);        
        console.log("put", a);
      } else {
        let a;
        a = await this.http.post("/claim", this.claim);
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
}
