import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';
import * as moment from 'moment';
import { LoadingController } from '@ionic/angular';
import { IonSelect } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-payroll-run',
  templateUrl: './payroll-run.page.html',
  styleUrls: ['./payroll-run.page.scss'],
})
export class PayrollRunPage implements OnInit {
  @ViewChild('portEmployee') portEmployee: IonicSelectableComponent;
  @ViewChild('dateSelect', { static: false }) dateSelect: IonSelect;  
  sUrl: string;
  showSelect: boolean = false; 
  pUrl: string;
  isEdit: boolean = false;
  @ViewChild('videoElement', { static: true }) videoElement: ElementRef<HTMLVideoElement>;
  showImage: boolean = false;

  textButton: string = "All Employee";
  // showprogress : boolean = false;
  progress: number = 0;
  datasource: any = [];
  groupname: any = [];
  search : string = "";
  startdate: string;
  enddate: string;

  segment: string = 'checkpoint';
  selectedComboMonth: any =  { id: 2, name: "February"};
  imageData: string;
  userLocation: { latitude: number; longitude: number; fullAddress: string };// | null = null;
  private apiKey = "AIzaSyDB9AeCbKHkg5h9OmFV-cVjgiOZTWlcCaE";
  recognizedNames: string[] = []; // Array to hold recognized names  
  imageSource: any;
  imageCamera : any;

  employees : any = [];
  listemp: any = [];
  showListEmployee: boolean = false;

  constructor(
    public util: UtilService,
    private androidPermissions: AndroidPermissions,
    private modalController: ModalController,
    private loading: LoadingController,
    private http: HttpClient,
    public config: ConfigService,  
    private route: ActivatedRoute,  
  ) { }

  async ngOnInit() {  
    console.log(this.config.progress_payroll);
    // this.showprogress = false;
    this.pUrl = this.config.getPythonUrl();
    this.sUrl = this.config.getApiUrl();
    console.log(this.sUrl);

    const tahun : string = moment().format('YYYY'); 
    const dates = this.config.updateMonths(this.selectedComboMonth.id, tahun); // Call the service to update dates
    console.log(dates);
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate

    // this.loadData(0);    
    let a;
    a = await this.config.get("employee/username/" + this.config.username);
    this.employees = a; console.log(this.employees); 

  } 

  ionViewWillEnter() {
    // this.loadData(0);    
  }

  async testBrowser() {
    await Browser.open({ url: 'http://capacitorjs.com/' });
  }

  onBack() {
    this.util.navigateRoot("tabs/home");
  }

  toggleSelect() {
    this.dateSelect.open();    
  }

  onSegmentChange(event: any) {
    const selectedSegment = event.detail.value; // Ambil nilai segment yang dipilih
    console.log('Segment changed to:', selectedSegment);
    
    // Tambahkan logika tambahan di sini sesuai kebutuhan
    if (selectedSegment === 'checkin') {
      //
    } else if (selectedSegment === 'checkout') {
      // 
    } else if (selectedSegment === 'checkpoint') {
      // 
    } 
  }

  onSelectChange(event: any) {  
    console.log(event.detail);
    this.selectedComboMonth = event.detail.value; // Update the selected option    
    this.showSelect = false; // Hide the select after selection
    this.loadData(0);
  }

  async loadData(sendemail: number) {
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();

    console.log("load");

    const tahun : string = this.enddate.substring(0,4);
    const dates = this.config.updateMonths(this.selectedComboMonth.id, tahun); // Call the service to update dates
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate

    const url = "/attendance?startdate="+this.startdate+
                "&enddate="+this.enddate+
                "&username="+this.config.username+    
                "&sendemail="+sendemail+            
                "&search="+this.search; console.log(url);
    const a :any = await this.config.get(url); console.log(a);
    if (sendemail==0) { 
      this.datasource = a; 
      this.reloadDatasource();
    } else {
      this.datasource = a.datasource;
      this.reloadDatasource();
      this.util.showToast(a.message, "warning", "middle");
    }

    await loading.dismiss();    
  }

  reloadDatasource() {
    let groupedData = {};

    // Loop melalui setiap entri dalam data
    this.datasource.forEach(entry => {
        let key = entry.employee_id; // Gunakan employee_id sebagai kunci

        // Jika kunci belum ada dalam groupedData, buat objek baru
        if (!groupedData[key]) {
            groupedData[key] = {
                employee_id: entry.employee_id,
                nip: entry.nip,
                name: entry.name,
                username: entry.username,
                fingerid: entry.fingerid,
                detail: []
            };
        }

        // Tambahkan entri asli ke dalam array 'detail'
        groupedData[key].detail.push(entry);
    });

    // Ubah groupedData menjadi array
    let result = Object.values(groupedData);
    result.sort((a:any, b:any) => a.name.localeCompare(b.name));
    this.groupname = result;
    // Output hasil
    console.log(this.groupname);
  }
  
  editData(id: number) {
    if (this.config.user.id_usergroup!=1) { return; }
    
    const param: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.util.navigateToPage('attendance-form', param);
  }

  sendEmail() {
    this.loadData(1);
  }

  addData() {
    // this.showImage = true;
    console.log("add data");
    // this.isEdit = true;
  }

  saveData() {
    console.log("save data");

    if (this.segment=="checkin") {
      console.log("save checkin");      
    } else  if (this.segment=="checkout") {
      console.log("save checkout");
    } else if (this.segment=="checkpoint") {
      console.log("save checkpoint");
    }
    
    this.isEdit = false;  
    this.showImage = false;  
  }

  async InsertDatabase(user: string, tdate: string, 
                 latitude: number, longitude: number, fulladdress: string) {
    this.isEdit=false;
    console.log("insertdatabase: "+user+", "+tdate);
    

    // console.log('Form Submitted', this.leaveRequest);

    // const loading = await this.loading.create({
    //   message: 'Please wait...',
    //   spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    // });
    // await loading.present();
    let inoutmode = 88;
    if (this.segment=="checkin") {
      inoutmode = 88;
    } else  if (this.segment=="checkout") {
      inoutmode = 99
    }
    console.log("a1");
    try {
      let a;
      console.log("a2");
      console.log({
            "username": user,
            "fulldate": moment().format('YYYY-MM-DD HH:mm:ss'),            
            "inoutmode": inoutmode,
            "latitude": latitude,
            "longitude": longitude,
            "fulladdress": fulladdress,
      });
      a = await this.config.post("/finger", {
            "username": user,
            "fulldate": moment().format('YYYY-MM-DD HH:mm:ss'),            
            "inoutmode": inoutmode,
            "latitude": latitude,
            "longitude": longitude,
            "fulladdress": fulladdress,
      });  
      console.log("a3");
      console.log(a);
      if (a) {
        console.log("a4");
        if (a.finger_id) {
          console.log("a5");
          if (a.finger_id <=0) {
            this.util.showToast("Error save", "danger", "top");
          } else {
            this.onSegmentChange({detail : {value: this.segment } })
          }
        } else {
          console.log("a6");
          this.util.showToast("Error save", "danger", "top");
        }
      } else {
        console.log("a7");
        this.util.showToast("Error save", "danger", "top");
      }
      console.log("a8");
    } catch (error) {
      this.util.showToast("Error loading data: "+error, "danger", "top");
      console.error('Error loading data', error);
      // await loading.dismiss();
    } finally {      
      // await loading.dismiss();
    }
  }

  
  padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  onEmployeeChange() {
    // console.log(this.listemp);
  }

  async showEmployee() {
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();

    this.showListEmployee = true;
    //add 1 seconds waiting
    // this.portEmployee.open();
    setTimeout(() => {
      loading.dismiss();
      // this.showListEmployee = true;
      this.portEmployee.open(); // Membuka portEmployee setelah 1 detik
    }, 1000); // 1000 ms = 1 detik

  }

  onClose(event:any){
    this.showListEmployee = false;
    // console.log(event);
    // console.log(this.listemp);
    this.textButton = 'All Employee';
    if (this.listemp) {
      if (this.listemp.length > 0) {
        this.textButton = 'Filtered Employee';
        // const employeeIds = this.listemp.map(employee => employee.id).join(', ');
        // const resultString = `employee_id in (${employeeIds})`;
        // console.log(resultString); // Output: employee_id in (11, 9)

      }
    }
  }
  async startPayrollProcess() {
    
    let condition1 = "(0=0)";
    console.log(this.listemp);
    if (this.listemp) {
      if (this.listemp.length > 0) {
        const employeeIds = this.listemp.map(employee => employee.id).join(', ');
        condition1 = `employee_id in (${employeeIds})`;      
      }
    }

    
    // console.log(new Date());
    // console.log(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));

    const now = new Date();
    const hours = this.padZero(now.getHours());
    const minutes = this.padZero(now.getMinutes());
    const seconds = this.padZero(now.getSeconds());    
    const currentTime = `${hours}:${minutes}:${seconds}`;
    // console.log(currentTime);
    // return;

    this.progress = 0;
    // this.showprogress = true;
    // console.log(dates);
    // this.startdate = dates.startdate; // Update startdate
    // this.enddate = dates.enddate; // Update enddate
    
    const token = await this.config.getToken(); console.log("token", token);

    // this.listemp = "(0=0)";
    // Kirim permintaan API ke backend untuk memulai proses payroll
    // 'run-payroll'
    this.http.post(this.config.getApiUrl() + 'payroll/process', 
          {
            startdate: this.startdate,
            enddate: this.enddate,            
            tdate: this.enddate,
            ttime: currentTime,
            name: 'RUN PAYROLL',
            condition1: condition1,
            param1: this.enddate,
            total: 100,
          }, {headers: {Authorization: 'Bearer ' + token} }  ).subscribe(response => {
      console.log(response);
      
      const socket = new WebSocket('ws:' + this.config.getSocketUrl());
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data); console.log(data);
        this.config.progress_payroll = data.progress;
        if (this.config.progress_payroll>=100) {
          // this.showprogress = false;
        }
      };

      socket.onclose = () => {
        console.log('Koneksi WebSocket ditutup');
        // this.showprogress = false;
      };
    });
  }

  nextMonth() {
    const tahun : string = this.enddate.substring(0,4);
    const dates = this.config.nextMonth(this.selectedComboMonth.id, tahun); // Call the service to update dates
    console.log(dates);
    this.selectedComboMonth.id   = dates.id;
    this.selectedComboMonth.name = dates.name;
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate
  }

  prevMonth() {
    const tahun : string = this.enddate.substring(0,4);
    const dates = this.config.prevMonth(this.selectedComboMonth.id, tahun); // Call the service to update dates
    console.log(dates);
    this.selectedComboMonth.id   = dates.id;
    this.selectedComboMonth.name = dates.name;
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate
  }


}

