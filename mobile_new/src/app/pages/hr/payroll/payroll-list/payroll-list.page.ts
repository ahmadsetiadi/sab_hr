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
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import html2pdf from 'html2pdf.js';

import { Capacitor } from '@capacitor/core';
import { lastValueFrom } from 'rxjs';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Component({
  selector: 'app-payroll-list',
  templateUrl: './payroll-list.page.html',
  styleUrls: ['./payroll-list.page.scss'],
})
export class PayrollListPage implements OnInit {
  @ViewChild('slipContent') slipContent!: ElementRef;

  nama:string;
  showSlip: boolean = false;

  dataslip: any;
  dataslipx: any = {
    header: {
      company: "",
      address: "Panjibuwono City, Ruko The Plaza AR No.1-2, Kelurahan Kedung Pengawas, Kecamatan Babelan, Kabupaten Bekasi, Jawa Barat",
      telp: "+62 21 5692 6357",
      mobile: "",
      email: "",
      web: ""
    }, 
    employee: {
      periode: "",
      name: "",
      nip: "",
      position: "",
      department: "",
      ptkp: "",
      npwpemployee: "",
      takehomepay: 0,
      bankname: "",
      bankaccountname: "",
      bankaccountnumber: ""
    }, 
    income: {
      gajipokok: 0,
      uang_makan: 0,
      tk_jhtcompany: 0,
      tk_jkk: 0,
      tk_jkm: 0,
      total: 0
    }, 
    deduction: {
      p_tk_jhtcompany: 0,
      p_tk_jhtemployee: 0,
      p_tk_jkk: 0,      
      p_ks_employee: 0,
      total: 0,
      p_ks_company: 0,      
      p_tk_jkm : 0      
    }
  }

  @ViewChild('dateSelect', { static: false }) dateSelect: IonSelect;  
  sUrl: string;
  showSelect: boolean = false; 
  pUrl: string;
  isEdit: boolean = false;
  @ViewChild('videoElement', { static: true }) videoElement: ElementRef<HTMLVideoElement>;
  showImage: boolean = false;

  datasource: any = [];
  datathr: any = [];
  groupname: any = [];
  search : string = "";
  startdate: string;
  enddate: string;

  segment: string = 'checkpoint';
  selectedComboMonth: any =  { id: 3, name: "Maret"};
  selected
  imageData: string;
  userLocation: { latitude: number; longitude: number; fullAddress: string };// | null = null;
  private apiKey = "AIzaSyDB9AeCbKHkg5h9OmFV-cVjgiOZTWlcCaE";
  recognizedNames: string[] = []; // Array to hold recognized names  
  imageSource: any;
  imageCamera : any;

  linkpdf: SafeResourceUrl;

  pdfUrl: string | null = null;

  token : any;

  pdfUrl2: string = 'http://192.168.1.6:3000/slip/THR_SLIP_202503_Aam.pdf';

  @ViewChild('downloadLink', { static: false }) downloadLink: ElementRef;

  constructor(
    public util: UtilService,
    private androidPermissions: AndroidPermissions,
    private modalController: ModalController,
    private loading: LoadingController,
    private http: HttpClient,
    public config: ConfigService,  
    private route: ActivatedRoute, 
    private sanitizer: DomSanitizer, 
  ) { }

  async ngOnInit() {  

    console.log(this.linkpdf);
    this.token = await this.config.getToken();
    this.pUrl = this.config.getPythonUrl();
    this.sUrl = this.config.getApiUrl();
    console.log(this.sUrl);

    this.selectedComboMonth = this.config.getselectedComboMonth();

     

    const tahun : string = moment().format('YYYY'); 
    const dates = this.config.updateMonths(this.selectedComboMonth.id, tahun); // Call the service to update dates    
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate
    
    this.linkpdf = this.sanitizer.bypassSecurityTrustResourceUrl("http://192.168.1.8:3000/document/payrollslip/2025/1/11");
    this.loadData2();
    // this.loadData(0);    
    // this.downloadPayrollSlip('2025', '1', '11');
  } 

  async loadData2() {
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();
    
    const url = "/payrollslip?startdate="+this.startdate+
                "&enddate="+this.enddate+
                "&username="+this.config.username+
                "&search="+this.search; console.log(url);
    const a = await this.config.get(url); console.log(a);
    this.datasource = a;
    
    const url2 = "/payrollslip/thr?startdate="+this.startdate+
                "&enddate="+this.enddate+
                "&username="+this.config.username+
                "&search="+this.search; console.log(url2);
    const b = await this.config.get(url2); console.log(b);
    this.datathr = b;
    await loading.dismiss();
    console.log(this.datasource);    
    console.log(this.datathr);    
  }

  // download(data: any) {
  //   this.showSlip = true;
  //   this.nama = "adi";
  //   const opt = {
  //         margin:       0.3,
  //         filename:     'slip_gaji_feb_2025.pdf',
  //         image:        { type: 'jpeg', quality: 0.98 },
  //         html2canvas:  { scale: 2 },
  //         jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' }
  //       };
  //       html2pdf().from(this.slipContent.nativeElement).set(opt).save();
  //       this.showSlip = false;
  // }

  async deletePayroll(data: any) {
    const a = await this.config.delete("/payroll/", {"employee_id": data.employee_id, "tdate": data.tdate });     
    this.loadData2();
    // setTimeout(() => {
    //   this.loadData2();
    // }, 2000); // 1000 ms = 1 detik    
  }
  async download(data: any) {
      this.dataslip = data;
      console.log(this.dataslip);
      this.showSlip = true;

      const opt = {
        margin: 0.3,
        filename: 'SINAR_Payrollslip.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' }
      };

      const fileName = `payrollslip_${Date.now()}.pdf`;
      html2pdf().from(this.slipContent.nativeElement).outputPdf().then(async function(pdf) {          
          await Filesystem.writeFile({
            path: fileName,
            data: btoa(pdf),
            directory: Directory.Documents,
            recursive: true
          });                       
      });

      this.util.showToast("save to Document, filename: "+fileName, "success", "middle"); 
      this.showSlip = false;
      
  }
  async download0(data: any) {      
    this.dataslip = data;
    console.log(this.dataslip);
    this.showSlip = true;

    const opt = {
      margin: 0.3,
      filename: 'SINAR_Payrollslip.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' }
    };

    const worker = html2pdf()
    .from(this.slipContent.nativeElement)
    .set(opt)
    .outputPdf('blob'); // gunakan outputPdf alih-alih save

    console.log("a");
    const pdfBlob = await worker;
    console.log("b");

    console.log(pdfBlob);
    // Convert Blob to base64
    const base64string = await this.blobToBase64(pdfBlob) as string;
    console.log(base64string);
    // Simpan ke file
    const fileName = `payrollslip_${new Date().toISOString()}.pdf`;

    await Filesystem.writeFile({
      path: fileName,
      data: base64string,
      directory: Directory.Documents,
      recursive: true
    });

    this.showSlip = false;
    
    // const worker = html2pdf().from(this.slipContent.nativeElement).set(opt).save();
    // worker.then(() => {
    //   this.showSlip = false;
    // });
  }

  blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

  // async convertBlobToBase64(blob: Blob): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     console.log(blob);
  //     console.log("a1");
  //     const reader = new FileReader();
  //     console.log("a2");
  //     reader.onloadend = () => {
  //       try {
  //         console.log("a3");
  //         const result = reader.result as string;
  //         if (!result.startsWith('data:application/pdf')) {
  //           console.warn("⚠️ Bukan PDF base64:", result.substring(0, 50));
  //         }
  //         resolve(result.split(',')[1]);
  //       } catch (err) {
  //         console.log("a4");
  //         reject(err);
  //       }
  //     };
  //     reader.onerror = (e) => {
  //       console.log("a5");
  //       console.error("❌ FileReader error:", e);
  //       reject(e);
  //     };
  //     console.log("a6");
  //     reader.readAsDataURL(blob);
  //     console.log("a8");
  //   });
  // }

  downloadPayrollSlip(thn: string, bln: string, employeeId: string) {
    this.getPayrollSlip(thn, bln, employeeId).subscribe(
      (response) => {
        // console.log(response);
        const blob = new Blob([response], { type: 'application/pdf' });
        // console.log(blob);
        // this.pdfUrl = window.URL.createObjectURL(blob);
        this.linkpdf = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
        console.log(this.linkpdf);
        // Membuka PDF di iframe atau tab baru
        // window.open(url);
      },
      (error) => {
        console.error('Error downloading payroll slip:', error);
        // Tampilkan pesan kesalahan kepada pengguna
      }
    );
  }

  getPayrollSlip(thn: string, bln: string, employeeId: string): Observable<any> {
    const base = this.config.getApiUrl();
    const url = `${base}document/payrollslip/${thn}/${bln}/${employeeId}`;
    
    return this.http.get(url, { headers: {Authorization: 'Bearer ' + this.token}, responseType: 'blob' }); // Menggunakan responseType 'blob' untuk file
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
    this.loadData2();
    // this.downloadPayrollSlip('2025', '1', '11');
  }

  prevMonth() {
    const tahun : string = this.enddate.substring(0,4);
    const dates = this.config.prevMonth(this.selectedComboMonth.id, tahun); // Call the service to update dates
    console.log(dates);
    this.selectedComboMonth.id   = dates.id;
    this.selectedComboMonth.name = dates.name;
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate
    this.loadData2();
    // this.downloadPayrollSlip('2025', '1', '11');
  }

  async loadData() {
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();

    const thn = this.enddate.substring(0, 4);
    const bln = this.enddate.substring(5, 7);

    const base = this.config.getApiUrl();
    const url = `${base}document/payrollslip/${thn}/${bln}/${this.config.employee_id}`;
    
    this.linkpdf = this.sanitizer.bypassSecurityTrustResourceUrl(url); //"http://192.168.1.8:3000/document/payrollslip/2025/1/11");
    

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
    this.loadData();
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

  downloadSlip() {
    //
  }


}

