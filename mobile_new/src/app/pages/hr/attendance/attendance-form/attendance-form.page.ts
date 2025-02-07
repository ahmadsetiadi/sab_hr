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
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.page.html',
  styleUrls: ['./attendance-form.page.scss'],
  // standalone: true, // Menandakan bahwa ini adalah komponen standalone
  // imports: [IonicSelectableComponent],  // Mengimpor IonicSelectableComponent
  
})
export class AttendanceFormPage implements OnInit {
  // leavetypes:any=[];
  // search : string = "";
  attendance = {    
    attendance_id: 0,
    tdate: '2024-12-22',    
    overtimehour: 0,
    overtimedescription: '',
    employee_id: 0,
    name: "",  
    userentry: "",
  };

  // readonlyEmployee: boolean = false;

  // employees : any = [];

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
    this.attendance.tdate = today;    

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
      // a = await this.http.get("employee/username/" + this.http.username);
      // this.employees = a;

      // a = await this.http.get("leave/leavetype");
      // this.leavetypes = a; console.log(this.leavetypes);

      if (this.id!=0) {
        const b : any= await this.http.get("attendance/"+this.id);
        console.log(b);
        
        this.attendance = {    
          tdate: b.tdate,    
          attendance_id: b.attendance_id,
          overtimehour: b.overtimehour,
          employee_id: b.employee_id,
          name: b.name,
          userentry: b.userentry,  
          overtimedescription: b.overtimedescription        
        };
        // console.log(this.attendance);
      }  
      
    } catch (error) {
      console.error('Error loading data', error);
    } finally {      
      await loading.dismiss();
    }
  }

  loadLeaveData(id: number) {

  }

  onTdateChange() {
    this.showDatePicker = false;        
  }
  onBack() {
    this.util.navigateRoot("attendance");
  }

  openTdatePicker() {
    const datePicker : any = document.createElement('ion-datetime');
    datePicker.value = this.attendance.tdate;
    datePicker.min = new Date().toISOString(); // Set minimum date to today
    datePicker.addEventListener('ionChange', (event: any) => {
      this.attendance.tdate = event.detail.value;
    });

    document.body.appendChild(datePicker);
    datePicker.present();
  }

  async onSubmit() {
    this.attendance.userentry = this.http.username;

    if (!this.attendance.overtimedescription || !this.attendance.overtimehour ) {
      // Tampilkan alert jika ada field yang kosong
      const alert = await this.alert.create({
        header: 'Warning',
        message: 'Please fill all field',
        buttons: ['OK']
      });
      await alert.present();
      return; // Hentikan eksekusi lebih lanjut
    }
    if (this.attendance.overtimehour<=0 || this.attendance.overtimehour<=0 || this.attendance.overtimedescription=="" ) {
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
        a = await this.http.put(
          "/attendance/"+this.id, 
          {
            overtimehour: this.attendance.overtimehour,
            overtimedescription: this.attendance.overtimedescription
          }

        );        
        // console.log("put", a);
      } else {
        // let a;
        // a = await this.http.post("/attendance", this.attendance);        
      }    
      this.onBack(); 
      // this.util.navigateToPage("", {'r/efresh': 'true'});       
    } catch (error) {
      console.error('Error loading data', error);
    } finally {      
      await loading.dismiss();
    }
    // Tambahkan logika untuk mengirim data ke server atau melakukan tindakan lain
  }
}
