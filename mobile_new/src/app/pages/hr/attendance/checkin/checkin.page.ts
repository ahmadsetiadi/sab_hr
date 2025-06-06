import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
//import { BrandInfoPage } from '../brand-info/brand-info.page';
import { NavigationExtras } from '@angular/router';

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
// import sharp from 'sharp';  

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.page.html',
  styleUrls: ['./checkin.page.scss'],
})
export class CheckinPage implements OnInit {
  @ViewChild('dateSelect', { static: false }) dateSelect: IonSelect;
  // @ViewChild('videoElement', { static: false }) videoElement: ElementRef;
  // showImage: boolean = true;
  sUrl: string;
  showSelect: boolean = false; 
  pUrl: string;
  isEdit: boolean = false;
  @ViewChild('videoElement', { static: true }) videoElement: ElementRef<HTMLVideoElement>;
  showImage: boolean = false;

  datasource_checkin: any = [];
  datasource_checkout: any = [];
  datasource_checkpoint: any = [];
  filtered_checkin: any = [];
  filtered_checkout: any = [];
  filtered_checkpoint: any = [];
  

  fulldate_checkin: string = "";
  fulldate_checkout: string = "";
  fulldate_checkpoint: string = "";

  search : string = "";
  startdate: string;
  enddate: string;

  segment: string = 'checkpoint'; //'checkin'; 
  selectedComboDate: any =  { id: 2, name: "Today"};
  // selectedComboDate: any =  { id: 1, name: "This Month"};
  imageData: string;
  userLocation: { latitude: number; longitude: number; fullAddress: string };// | null = null;
  private apiKey = "AIzaSyDB9AeCbKHkg5h9OmFV-cVjgiOZTWlcCaE";
  recognizedNames: string[] = []; // Array to hold recognized names  
  imageSource: any;
  webpImage : any;
  imageCamera : any;
  constructor(
    public util: UtilService,
    private androidPermissions: AndroidPermissions,
    private modalController: ModalController,
    private loading: LoadingController,
    private http: HttpClient,
    public config: ConfigService,    
  ) { }

  async ngOnInit() {  
    // console.log(this.getLocation());
    this.fulldate_checkin = "";
    this.fulldate_checkout = "";
    this.fulldate_checkpoint = "";
    this.pUrl = this.config.getPythonUrl();
    this.sUrl = this.config.getApiUrl();
    console.log(this.sUrl);
    this.userLocation = {
      latitude: 0,
      longitude: 0,
      fullAddress: '',
    };
    this.isEdit = false;  
    this.showImage = false;  
    // console.log(this.isEdit);
    this.imageData = "assets/adi.jpg";  

    this.datasource_checkin    = [];
    this.datasource_checkout   = [];
    this.datasource_checkpoint = [];

    this.filtered_checkin    = [];
    this.filtered_checkout   = [];
    this.filtered_checkpoint = [];
    // filtered
    // this.onSegmentChange({detail : {value: this.segment } });
    // this.getLocation();

    // this.openCamera();
    // / Call checkIn() after 5 seconds
      //  setTimeout(() => {
      //    this.checkin();
      //  }, 5000); // 5000 milliseconds = 5 seconds
  }  

  ionViewWillEnter() {
    console.log("onshow");
    this.fulldate_checkin = "";
    this.fulldate_checkout = "";
    this.fulldate_checkpoint = "";
  }
  toggleSelect() {
    this.dateSelect.open();
    // console.log("test");
    if (this.selectedComboDate.id==1) {

    }
    //this.showSelect = !this.showSelect; // Toggle the visibility
  }

  onSegmentChange(event: any) {
    console.log(event);
    const selectedSegment = event.detail.value; // Ambil nilai segment yang dipilih
    console.log('Segment changed to:', selectedSegment);
    
    // Tambahkan logika tambahan di sini sesuai kebutuhan
    if (selectedSegment === 'checkin') {
      this.loadData(88, null);
      // Logika untuk Check In
    } else if (selectedSegment === 'checkout') {
      this.loadData(99, null);
      // Logika untuk Check Out
    } else if (selectedSegment === 'checkpoint') {
      this.loadData(77, null);
      // Logika untuk Check Point
    } 
  }

  onSelectChange(event: any) {
    if (event!=null) {
      this.selectedComboDate = event.detail.value; // Update the selected option    
    }    
    this.showSelect = false; // Hide the select after selection    
    this.onSegmentChange({detail : {value: this.segment } })
  }

  async loadData(mode: number, event:any) {
    let fingerIdsString: string = "";
    console.log(event);
    console.log(mode);
    let loading : any;
    if (event==undefined) {
      loading = await this.loading.create({
        message: 'Please wait...',
        spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
      });
      await loading.present();  
    } 
    
    // this.util.show();
    console.log("load");
    let fulldate="";
    if (mode==88) {
      fingerIdsString = this.datasource_checkin  
                                .map(item => item.finger_id) // Mengambil finger_id dari setiap item  
                                .join(', '); // Menggabungkan menjadi string yang dipisahkan dengan koma          
      console.log(fingerIdsString);
      if (this.datasource_checkin.length>0) {
        this.fulldate_checkin = moment(this.datasource_checkin[this.datasource_checkin.length-1].fulldate).utc().format('YYYY-MM-DD HH:mm:ss');          
        fulldate = this.fulldate_checkin;
      }
    }
    
    if (mode==99) {
      fingerIdsString = this.datasource_checkout  
                                .map(item => item.finger_id) // Mengambil finger_id dari setiap item  
                                .join(', '); // Menggabungkan menjadi string yang dipisahkan dengan koma          
      console.log(fingerIdsString);
      if (this.datasource_checkout.length>0) {
        this.fulldate_checkout = moment(this.datasource_checkout[this.datasource_checkout.length-1].fulldate).utc().format('YYYY-MM-DD HH:mm:ss');          
        fulldate = this.fulldate_checkout;
      }
    }

    if (mode==77) {
      fingerIdsString = this.datasource_checkpoint  
                                .map(item => item.finger_id) // Mengambil finger_id dari setiap item  
                                .join(', '); // Menggabungkan menjadi string yang dipisahkan dengan koma          
      console.log(fingerIdsString);
      
      if (this.datasource_checkpoint.length>0) {
        this.fulldate_checkpoint = moment(this.datasource_checkpoint[this.datasource_checkpoint.length-1].fulldate).utc().format('YYYY-MM-DD HH:mm:ss');          
        fulldate = this.fulldate_checkpoint;
      }
    }

    const dates = this.config.updateDates(this.selectedComboDate.id); // Call the service to update dates
    this.startdate = dates.startdate; // Update startdate
    this.enddate = dates.enddate; // Update enddate

    const startDate = new Date(this.startdate+'T00:00:00Z'); // January 17, 2025, 00:00:00 UTC  
    const endDate = new Date(this.enddate+'T23:59:59Z');   // January 18, 2025, 23:59:59 UTC  
  
    
    const url = "/finger?startdate="+this.startdate+
                "&enddate="+this.enddate+
                "&username="+this.config.username+
                "&inoutmode="+mode+
                "&fulldate="+fulldate+
                "&fingerid="+fingerIdsString; console.log(url);
                // "&search="+this.search; console.log(url);
    const a :any= await this.config.get(url); console.log(a);
    
    if (a.length===0) {
      if (event!=undefined) {
        event.target.disabled=true;
      }  
    } else {
      if (event!=undefined) {
        event.target.disabled=false;
      } 
    }
    
    // let filteredData = [];
    // if (a.length>0) {
    //     filteredData = a.filter(item => 
    //         item.name.toLowerCase().includes(this.search.toLowerCase())
    //     );
                
    //     filteredData.forEach(item => {
    //         datasource_checkin.push(item);
    //     });
    // }
        
    if (this.segment === 'checkin') {
      // this.datasource_checkin = a; 
      if (a.length>0) {
        a.forEach(item => {  
          this.datasource_checkin.push(item);  
        });
      }
      console.log("checkin", this.datasource_checkin);      

      this.filtered_checkin = this.datasource_checkin.filter(item => {  
        const itemDate = new Date(item.fulldate);  
        return itemDate >= startDate && itemDate <= endDate;  
      });  
      this.filtered_checkin = this.filtered_checkin.filter(item => 
          item.name.toLowerCase().includes(this.search.toLowerCase())
      );
      console.log("filteredData", this.filtered_checkin); 
    } else if (this.segment === 'checkout') {      
      if (a.length>0) {
        a.forEach(item => {  
          this.datasource_checkout.push(item);  
        });
      }
      console.log("checkout", this.datasource_checkout);      

      this.filtered_checkout = this.datasource_checkout.filter(item => {  
        const itemDate = new Date(item.fulldate);  
        return itemDate >= startDate && itemDate <= endDate;  
      });  
      this.filtered_checkout = this.filtered_checkout.filter(item => 
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
      console.log("filteredData", this.filtered_checkout);  
    } else if (this.segment === 'checkpoint') {            
      if (a.length>0) {
        a.forEach(item => {  
          this.datasource_checkpoint.push(item);  
        });                  
      }
      console.log("checkpoint", this.datasource_checkpoint);  

      this.filtered_checkpoint = this.datasource_checkpoint.filter(item => {  
        const itemDate = new Date(item.fulldate);  
        return itemDate >= startDate && itemDate <= endDate;  
      });  
      this.filtered_checkpoint = this.filtered_checkpoint.filter(item => 
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
      console.log("filteredData", this.filtered_checkpoint);  

      // const fingerIdsString = this.datasource_checkpoint  
      //                           .map(item => item.finger_id) // Mengambil finger_id dari setiap item  
      //                           .join(', '); // Menggabungkan menjadi string yang dipisahkan dengan koma          
      // console.log(fingerIdsString);
    } 

    if (event!=undefined) {
      event.target.complete();
    }

    if (event==undefined) {
      await loading.dismiss();
    }
    // this.util.hide();
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

  async openBrandInfo(name: any, image: any) {
    // const modal = await this.modalController.create({
    //   component: BrandInfoPage,
    //   cssClass: 'long-modal',
    //   componentProps: { name: name, image: image }
    // });
    // modal.onDidDismiss().then((data) => {
    //   console.log(data);
    //   if (data && data.data && data.data == 'products') {
    //     this.onProductList(name, image);
    //   }
    // });
    // await modal.present();
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

  async convertToWebP() {  
    try {  
      // Ambil data gambar dari this.imageSource  
      const response = await fetch(this.imageSource);  
      const blob = await response.blob();  
      const img = new Image();  
    
      // Menggunakan Promise untuk menunggu gambar dimuat  
      const imgLoadPromise = new Promise<void>((resolve, reject) => {  
        img.onload = () => resolve();  
        img.onerror = (error) => reject(error);  
      });  
    
      // Mengatur src gambar  
      img.src = URL.createObjectURL(blob);  
      await imgLoadPromise;  
    
      // Membuat canvas untuk meresize gambar  
      const canvas = document.createElement('canvas');  
      const ctx :any = canvas.getContext('2d');  
    
      // Mengatur ukuran canvas  
      canvas.width = 400; // Lebar baru  
      canvas.height = 400; // Tinggi baru  
    
      // Menggambar gambar ke canvas  
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);  
    
      // Mengonversi canvas ke format WebP  
      this.webpImage = canvas.toDataURL('image/webp', 0.7); // Kualitas 70%  
      console.log(this.webpImage); 
      this.saveData();
    } catch (error) {  
      console.error('Error processing image:', error);  
    }  
  }  

  async convertToWebPx() {  
    const canvas = document.createElement('canvas');  
    const ctx : any = canvas.getContext('2d');  
  
    const img = new Image();  
    img.src = this.imageSource;  
    
    img.onload = () => {  
      // Mengatur ukuran canvas sesuai dengan gambar  
      canvas.width = img.width;  
      canvas.height = img.height;  
  
      // Menggambar gambar ke canvas  
      ctx.drawImage(img, 0, 0);  
  
      // Mengonversi canvas ke format WebP  
      this.webpImage = canvas.toDataURL('image/webp', 0.7); // Kualitas 70%  
      console.log(this.webpImage); // Ini adalah string Base64 dari gambar dalam format WebP  
      this.saveData();
    };  
  
    img.onerror = (error) => {  
      console.error('Error loading image:', error);  
    };  
  }  

  async startCamera() {
    const image = await Camera.getPhoto({
      quality: 50,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      saveToGallery: false,
    });

    console.log(image);
    this.imageCamera = image;
    this.imageSource = "data:image/jpeg;base64," + this.imageCamera.base64String;
    
    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();

    this.convertToWebP();

    await loading.dismiss();
    // console.log(this.imageCamera);
    // console.log(this.imageSource);
  }

  async openCamera() {
    this.startCamera();
    console.log("a");
    return;
    console.log("b");
    // // Meminta izin akses kamera
    // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
    //   result => {
    //     if (result.hasPermission) {
    //       console.log("Izin sudah diberikan, mulai pratinjau kamera");
    //       //this.startCamera();
    //     } else {
    //       // Minta izin
    //       this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA).then(
    //         () => {
    //           console.log("Izin diberikan, mulai pratinjau kamera");
    //           // this.startCamera();
    //         },
    //         err => {
    //           console.log('Izin ditolak', err);
    //         }
    //       );
    //     }
    //   },
    //   err => {
    //     this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA);
    //   }
    // );

    //camera: 'rear', // 'front' or 'rear'
    // alpha: 1,
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
    console.log(this.imageCamera.base64String);
    console.log("=============");
    // console.log(this.webpImage.split(',')[1]);
    // this.util.hide();
    // return;
    // const base64String = this.webpImage.split(',')[1]; 
    const base64String = this.imageCamera.base64String;
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

  async convertImageToWebP(imgElement) {  
    return new Promise((resolve, reject) => {  
        // Membuat elemen canvas  
        const canvas = document.createElement('canvas');  
        const ctx : any= canvas.getContext('2d');  

        // Mengatur ukuran canvas sesuai dengan gambar  
        canvas.width = imgElement.naturalWidth; // Menggunakan ukuran asli gambar  
        canvas.height = imgElement.naturalHeight;  

        // Menggambar gambar ke canvas  
        ctx.drawImage(imgElement, 0, 0);  

        // Mengonversi canvas ke format WebP  
        const webpData = canvas.toDataURL('image/webp', 0.3); // Kualitas 70%  
        resolve(webpData.split(',')[1]); // Mengembalikan hanya bagian base64  
    });  
  } 

  async takePicture_checkpoint2() {
    this.util.show();
    // const imgElement = document.getElementById('imageElement');  
    const webpBase64x = this.webpImage.split(',')[1]; //await this.convertImageToWebP(imgElement);  
    console.log(webpBase64x);
    
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
      "imagedata": webpBase64x, //this.imageCamera.base64String,
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
