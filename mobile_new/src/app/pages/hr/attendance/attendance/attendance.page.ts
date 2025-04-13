import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
//import { BrandInfoPage } from '../brand-info/brand-info.page';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
// import { Camera, CameraResultType } from '@capacitor/camera';
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
import { Observable } from 'rxjs';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  @ViewChild('dateSelect', { static: false }) dateSelect: IonSelect;
  // @ViewChild('videoElement', { static: false }) videoElement: ElementRef;
  // showImage: boolean = true;
  sUrl: string;
  showSelect: boolean = false; 
  pUrl: string;
  isEdit: boolean = false;
  @ViewChild('videoElement', { static: true }) videoElement: ElementRef<HTMLVideoElement>;
  showImage: boolean = false;

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
  usergroupid : number = 0;
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
    // console.log(this.getLocation());
    this.usergroupid = this.config.user.id_usergroup;
    this.selectedComboMonth = this.config.getselectedComboMonth();

    this.pUrl = this.config.getPythonUrl();
    this.sUrl = this.config.getApiUrl();
    console.log(this.sUrl);

    const tahun : string = moment().format('YYYY'); 
    const dates = this.config.updateMonths(this.selectedComboMonth.id, tahun); // Call the service to update dates    
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate
    // this.loadData(0);    
  } 

  ionViewWillEnter() {
    this.loadData(0);
    
    // this.route.queryParams.subscribe((data: any) => {
    //   console.log(data);
    //   if (data.refresh=='true') {
    //     this.loadData(0);
    //   }    
    // });
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
      //this.loadData(88);
      // Logika untuk Check In
    } else if (selectedSegment === 'checkout') {
      // this.loadData(99);
      // Logika untuk Check Out
    } else if (selectedSegment === 'checkpoint') {
      // this.loadData(77);
      // Logika untuk Check Point
    } 
  }

  onSelectChange(event: any) {  
    console.log(event.detail);
    this.selectedComboMonth = event.detail.value; // Update the selected option    
    this.showSelect = false; // Hide the select after selection
    this.loadData(0);
  }

  nextMonth() {
    const tahun : string = this.enddate.substring(0,4);
    const dates = this.config.nextMonth(this.selectedComboMonth.id, tahun); // Call the service to update dates
    console.log(dates);
    this.selectedComboMonth.id   = dates.id;
    this.selectedComboMonth.name = dates.name;
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate
    this.loadData(0);
  }

  prevMonth() {
    const tahun : string = this.enddate.substring(0,4);
    const dates = this.config.prevMonth(this.selectedComboMonth.id, tahun); // Call the service to update dates
    console.log(dates);
    this.selectedComboMonth.id   = dates.id;
    this.selectedComboMonth.name = dates.name;
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate
    this.loadData(0);
  }


  async loadData(sendemail: number) {
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();

    // this.util.show();
    console.log("load");

    // const tahun : string = this.enddate.substring(0,4);
    // const dates = this.config.updateMonths(this.selectedComboMonth.id, tahun); // Call the service to update dates
    // this.startdate = dates.startdate; // Update startdate
    // this.enddate = dates.enddate; // Update enddate

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
    // console.log(this.groupname);
  }
  
  editData(id: number) {
    if (this.config.user.id_usergroup!=1) { return; }
    
    // Navigasi ke halaman employee-form dengan mengirimkan employee_id sebagai parameter
    // this.util.navigateRoot(['/employee-form', { id: id }]);
    // this.router.navigate(['/employee-form', { id: id }]);

    const param: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.util.navigateToPage('attendance-form', param);
  }

  downloadAttendance(): Observable<Blob> {
    const url = this.config.getApiUrl() + "vattendance/export-to-excel?startdate="+this.startdate+
                "&enddate="+this.enddate+
                "&username="+this.config.username+    
                "&sendemail=0"+            
                "&search="+this.search; console.log(url);

    return this.http.get(url, { responseType: 'blob' });


    // const url = "vattendance/export-to-excel?startdate="+this.startdate+
    // "&enddate="+this.enddate+
    // "&username="+this.config.username+    
    // "&sendemail=0"+            
    // "&search="+this.search; console.log(url);
    // const a :any = await this.config.get(url); console.log(a);
    
  }


  async downloadExcel() {
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();

    this.downloadAttendance().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      loading.dismiss();
      a.href = url;      
      a.download = 'attendance.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, error => {
      loading.dismiss();
      console.error('Error downloading the file', error);
    });
  }

  async sendEmail() {
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();

    const url = this.config.getemailUrl() + "vattendance/export-to-excel?startdate="+this.startdate+
                "&enddate="+this.enddate+
                "&username="+this.config.username+    
                "&sendemail=1"+            
                "&search="+this.search; console.log(url);    
    const a = await this.http.get(url, { responseType: 'json' }).subscribe(json => {
      const data: any = json; console.log(data);
      loading.dismiss();
      this.util.showToast(data.message, "", "middle");      
    }, error => {
      loading.dismiss();
      console.error('Error downloading the file', error);
    });
    

  }

  addData() {
    this.showImage = true;
    console.log("add data");
    this.isEdit = true;
    this.getLocation();
    this.openCamera();
  }

  saveData() {
    console.log("save data");

    if (this.segment=="checkin") {
      console.log("save checkin");
      this.takePicture();
    } else  if (this.segment=="checkout") {
      console.log("save checkout");
      this.takePicture();
    } else if (this.segment=="checkpoint") {
      console.log("save checkpoint");
      this.takePicture_checkpoint2();
    }
    
    this.isEdit = false;  
    this.showImage = false;  
  }

  async InsertDatabase(user: string, tdate: string, 
                 latitude: number, longitude: number, fulladdress: string) {
    this.isEdit=false;
    console.log("insertdatabase: "+user+", "+tdate);
    
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

  onProductList(name: any, image: any) {
    const param: NavigationExtras = {
      queryParams: {
        name: name,
        image: image,
      }
    };
    this.util.navigateToPage('products-by-category', param);
  }

  async startCamera() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      saveToGallery: false,
    });

    this.imageCamera = image;
    this.imageSource = "data:image/jpeg;base64," + this.imageCamera.base64String;

  }

  async openCamera() {
    this.startCamera();
    console.log("a");
    return;
    console.log("b");
   
    const cameraPreviewOptions: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height-300,      
      toBack: true,    
      parent: "cameraPreview"  
    };

    try {
      this.showImage = true; // Menampilkan elemen video
      console.log("a1");
      await CameraPreview.start(cameraPreviewOptions);
      console.log("a2");

      // // Set timer untuk mengambil gambar setelah 2 menit
      // setTimeout(() => {
      //   this.takePicture();
      // }, 2000);
    } catch (error) {
      console.log("err0r");
      console.error('Error starting camera preview:', error);
    }
  }

  base64ToBlob(base64: string, type: string): Blob {
      const byteCharacters = atob(base64); // Mengonversi Base64 menjadi string karakter byte
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i); // Mengonversi karakter menjadi kode karakter
      }
      const byteArray = new Uint8Array(byteNumbers); // Membuat Uint8Array dari byteNumbers
      return new Blob([byteArray], { type: type }); // Mengembalikan Blob
  }

  async takePicture() {
    this.util.show();
    // const pictureOptions: CameraPreviewPictureOptions = {
    //   quality: 40,      
    // };
    // const imageData = await CameraPreview.capture(pictureOptions);
    // console.log(imageData);
    // await CameraPreview.stop();    

    const base64String = this.imageCamera.base64String; //imageData.value; // Mengambil bagian Base64 dari data URL
    console.log(base64String);
    const blob = this.base64ToBlob(base64String, 'image/jpeg'); // Mengonversi Base64 menjadi Blob
    const formData = new FormData();
    formData.append('file', blob, 'image.jpg'); // Menambahkan Blob ke FormData    
    this.http.post(this.pUrl + 'upload', formData)
        .subscribe(response => {
            console.log('Response from server:', response);
            this.util.hide();
            this.handleResponse(response); // Handle the response
        }, error => {
            this.util.hide();
            this.util.showToast("Error uploading image: " + error, "danger", top);
            console.error('Error uploading image:', error);
        });        
  }
  async takePicture_checkpoint() {
    // const video = this.videoElement.nativeElement;
    // const canvas = document.createElement('canvas');
    // canvas.width = video.videoWidth;
    // canvas.height = video.videoHeight;
    // const context = canvas.getContext('2d');
    // context?.drawImage(video, 0, 0, canvas.width, canvas.height);
    // this.imageData = canvas.toDataURL('image/jpeg');
    this.util.show();
    const pictureOptions: CameraPreviewPictureOptions = {
      quality: 40,
      // resultType: CameraPreviewResultType.Base64, // Mengambil gambar dalam format Base64
    };
    const imageData = await CameraPreview.capture(pictureOptions);
    console.log(imageData);
    await CameraPreview.stop();

    // console.log("aa");
    // const compressedImageData = await this.compressImage(imageData.value);    
    // console.log(compressedImageData);
    

    const data : any = {
      "username": this.config.username,
      "fulldate": moment().format('YYYY-MM-DD HH:mm:ss'),            
      "inoutmode": "77",
      "latitude": this.userLocation.latitude,
      "longitude": this.userLocation.longitude,
      "fulladdress": this.userLocation.fullAddress,
      "imagedata": imageData.value,
    }
    console.log(data);
    let a;
    a = await this.config.post("/finger/upload-image", data); console.log(a);
    this.util.hide();
    if (a) {
      if (a.finger_id) {
        if (a.finger_id <=0) {
          this.util.showToast("Error save", "danger", "top");
        } else {
          this.onSegmentChange({detail : {value: this.segment } })
        }
      } else {
        this.util.showToast("Error save", "danger", "top");
      }
    } else {
      this.util.showToast("Error save", "danger", "top");
    }

    // this.showImage = false;

  }

  async takePicture_checkpoint2() {
    this.util.show();
    // const pictureOptions: CameraPreviewPictureOptions = {
    //   quality: 40,      
    // };
    // const imageData = await CameraPreview.capture(pictureOptions);
    // console.log(imageData);
    // await CameraPreview.stop();
    //const imageData = this.imageSource;
    const data : any = {
      "username": this.config.username,
      "fulldate": moment().format('YYYY-MM-DD HH:mm:ss'),            
      "inoutmode": "77",
      "latitude": this.userLocation.latitude,
      "longitude": this.userLocation.longitude,
      "fulladdress": this.userLocation.fullAddress,
      "imagedata": this.imageCamera.base64String,
    }
    console.log(data);
    let a;
    a = await this.config.post("/finger/upload-image", data); console.log(a);
    this.util.hide();
    if (a) {
      if (a.finger_id) {
        if (a.finger_id <=0) {
          this.util.showToast("Error save", "danger", "top");
        } else {
          this.onSegmentChange({detail : {value: this.segment } })
        }
      } else {
        this.util.showToast("Error save", "danger", "top");
      }
    } else {
      this.util.showToast("Error save", "danger", "top");
    }
  }
  
  private compressImage(base64Image: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = base64Image;

        img.onload = () => {
            console.log("a1");
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            console.log("a2");
            // Atur ukuran canvas sesuai kebutuhan
            const MAX_WIDTH = 800; // Ubah sesuai kebutuhan
            const MAX_HEIGHT = 800; // Ubah sesuai kebutuhan
            let width = img.width;
            let height = img.height;
            console.log("a3");
            // Mengubah ukuran gambar jika lebih besar dari batas maksimum
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            console.log("a4");
            canvas.width = width;
            canvas.height = height;
            ctx?.drawImage(img, 0, 0, width, height);
            console.log("a5");
            // Mengambil gambar dari canvas dalam format Base64 dengan kualitas yang lebih rendah
            const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7); // Kualitas 0.7 (70%)
            console.log(compressedBase64);
            resolve(compressedBase64);
        };

        img.onerror = (error) => {
            reject(error);
        };
    });
  }

  async openCamera2() {    
    // const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    // this.videoElement.nativeElement.srcObject = stream;
    // this.videoElement.nativeElement.play();
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.videoElement.nativeElement.srcObject = stream;
        this.videoElement.nativeElement.play();
        setTimeout(() => {
          this.checkin();
        }, 5000); // 5000 milliseconds = 5 seconds
      } catch (error) {
        console.error('Error accessing the camera:', error);
      }
    } else {
      console.error('getUserMedia is not supported in this browser.');
    }
  }

  // async takePicture() {
  //   const image = await Camera.getPhoto({
  //     quality: 90,
  //     allowEditing: false,
  //     resultType: CameraResultType.DataUrl,
  //   });

  //   this.imageData = image.dataUrl; // Menyimpan data URL gambar
  //   this.stopCamera();
  // }
  takePicture2() {
    const video = this.videoElement.nativeElement;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context?.drawImage(video, 0, 0, canvas.width, canvas.height);
    this.imageData = canvas.toDataURL('image/jpeg');

    fetch(this.imageData)
      .then(res => res.blob())
      .then(blob => {
        const formData = new FormData();
        formData.append('file', blob, 'image.jpg');
        
        this.http.post('http://192.168.1.8:5000/upload', formData)
          .subscribe(response => {
            console.log('Response from server:', response);
            this.handleResponse(response); // Handle the response
            // console.log(response[0].name);
            this.stopCamera();
          }, error => {
            console.error('Error uploading image:', error);
            this.stopCamera();
          });
      });
  }

  reCheckIn() {
    this.openCamera();
  }

  async getLocation() { //: void {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current position:', coordinates);
      this.userLocation = {
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude,
        fullAddress: '',
      };
      // console.log('Panjibuwono:', "-6.150824086548097, 107.03808238114553");
      // console.log('AC4 No.25:', "-6.148626664954737, 107.03740646449049"); //-6.242304, 107.0104576
      // console.log('User location:', this.userLocation);
      //-6.148626664954737, 107.03740646449049
      this.getLocationAddress(this.userLocation.latitude, this.userLocation.longitude);
      
    } catch (error) {
      console.log("error get location:", error);
    }
    

    
    

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       this.userLocation = {
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //         fullAddress: '',
    //       };
    //       // console.log('Panjibuwono:', "-6.150824086548097, 107.03808238114553");
    //       // console.log('AC4 No.25:', "-6.148626664954737, 107.03740646449049"); //-6.242304, 107.0104576
    //       // console.log('User location:', this.userLocation);
    //       //-6.148626664954737, 107.03740646449049
    //       this.getLocationAddress(this.userLocation.latitude, this.userLocation.longitude);
          
    //     },
    //     (error) => {
    //       console.error('Error getting location:', error);
    //       this.userLocation = {
    //         latitude: 0,
    //         longitude: 0,
    //         fullAddress: '',
    //       };
    //     }
    //   );
    // } else {
    //   console.error('Geolocation is not supported by this browser.');
    //   this.userLocation = {
    //     latitude: 0,
    //     longitude: 0,
    //     fullAddress: '',
    //   };
    // }
  }

  getAddressFromCoordinates(latitude: number, longitude: number) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${this.apiKey}`;
    return this.http.get(url);
  }

  getLocationAddress(latitude,longitude ) {
    // const latitude = -6.242304; // Example latitude
    // const longitude = 107.0104576; // Example longitude

    this.getAddressFromCoordinates(latitude, longitude).subscribe(
      (response: any) => {
        // console.log(response);
        if (response.status === 'OK') {
          // console.log(response.results[0].formatted_address);
          this.userLocation.fullAddress = response.results[0].formatted_address;
          console.log("location success: ",this.userLocation);
          //send api ke backend nodejs disini

          // const addressComponents = response.results[0].address_components;
          // const streetName = addressComponents.find(component => component.types.includes('route'))?.long_name;
          // const streetNumber = addressComponents.find(component => component.types.includes('street_number'))?.long_name;

          // const fullAddress = `${streetNumber ? streetNumber + ' ' : ''}${streetName}`;
          // console.log('Full Address:', fullAddress);
        } else {
          console.error('Error fetching address:', response.status);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  checkin() {
    const video = this.videoElement.nativeElement;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context?.drawImage(video, 0, 0, canvas.width, canvas.height);
    this.imageData = canvas.toDataURL('image/jpeg');

    fetch(this.imageData)
      .then(res => res.blob())
      .then(blob => {
        const formData = new FormData();
        formData.append('file', blob, 'image.jpg');
        
        this.http.post('http://192.168.1.8:5000/upload', formData)
          .subscribe(response => {
            console.log('Response from server:', response);
            this.handleResponse(response); // Handle the response
            // console.log(response[0].name);
            this.stopCamera();
          }, error => {
            console.error('Error uploading image:', error);
            this.stopCamera();
          });
      });
  }

  checkin2() {
    fetch(this.imageData)
      .then(res => res.blob())
      .then(blob => {
        const formData = new FormData();
        formData.append('file', blob, 'image.jpg');
        
        this.http.post('http://192.168.1.8:5000/upload', formData)
          .subscribe(response => {
            // console.log('Response from server:', response);
            this.handleResponse(response);
            //this.getLocationAddress(-6.148626664954737, 107.03740646449049)
            
            // console.log(this.userLocation);
            //kirim username (recognizedNames), latitude, longitude, fulladdress ke backend nodejs
            //-6.150664080427937, 107.03809310998132
            this.showImage = false;            
          }, error => {
            console.error('Error uploading image:', error);
            this.showImage = false;            
          });
      });
  }

  handleResponse(response: any) {
    // Check if the response is an array
    if (Array.isArray(response)) {
      // Extract names from the response
      this.recognizedNames = response.map(item => item.name.toUpperCase());
      console.log(this.recognizedNames.length);
      console.log('Recognized Names:', this.recognizedNames[0]);
      console.log(this.recognizedNames[0].toLowerCase());
      console.log(this.config.username.toLowerCase());
      if (this.recognizedNames.length>0) {
        if (this.recognizedNames[0].toLowerCase()==this.config.username.toLowerCase()) {
          // console.log("a");
          console.log("face match, insert to database");
          const tdate = moment().format('YYYY-MM-DD HH:mm:ss'); console.log(tdate);
          this.InsertDatabase(this.recognizedNames[0].toString().toLowerCase(), 
                              tdate, 
                              this.userLocation.latitude, 
                              this.userLocation.longitude,
                              this.userLocation.fullAddress);
        } else {
          this.isEdit=false;
          this.util.showToast("Face not match", "danger", "middle");
        }
      } else {
        this.isEdit=false;
        this.util.showToast("Face not match", "danger", "middle");
      }
      // if (this.recognizedNames[0]!="") {
      //   this.getLocationAddress(this.userLocation.latitude, this.userLocation.longitude);
      // }
    } else {
      this.isEdit=false;
      this.util.showToast("Face not match: "+response, "danger", "middle");
      // this.recognizedNames = "";
      console.error('Unexpected response format:', response);
    }
  }

  stopCamera() {
    // CameraPreview.stop();
    // const stream = this.videoElement.nativeElement.srcObject as MediaStream; // Menyatakan tipe stream
    // if (stream) {
    //   const tracks: MediaStreamTrack[] = stream.getTracks(); // Menyatakan tipe tracks
    //   tracks.forEach((track: MediaStreamTrack) => track.stop()); // Menyatakan tipe track
    // }
    // this.videoElement.nativeElement.srcObject = null;
  }
  openMap(data: any) {
    const latitude = data.latitude; // Ganti dengan latitude yang diinginkan  
    const longitude = data.longitude; // Ganti dengan longitude yang diinginkan  
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`; // URL Google Maps  
    console.log(url);
    // Membuka URL di browser eksternal  
    window.open(url, '_system'); 
  }

}

