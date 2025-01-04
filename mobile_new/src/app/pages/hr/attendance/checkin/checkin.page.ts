import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
//import { BrandInfoPage } from '../brand-info/brand-info.page';
import { NavigationExtras } from '@angular/router';

import { Camera, CameraResultType } from '@capacitor/camera';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.page.html',
  styleUrls: ['./checkin.page.scss'],
})
export class CheckinPage implements OnInit {
  // @ViewChild('videoElement', { static: false }) videoElement: ElementRef;
  // showImage: boolean = true;
  
  @ViewChild('videoElement', { static: true }) videoElement: ElementRef<HTMLVideoElement>;
  showImage: boolean = false;

  segment: string = 'checkin';
  imageData: string;
  userLocation: { latitude: number; longitude: number; fullAddress: string };// | null = null;
  private apiKey = "AIzaSyDB9AeCbKHkg5h9OmFV-cVjgiOZTWlcCaE";
  recognizedNames: string[] = []; // Array to hold recognized names  

  constructor(
    public util: UtilService,
    private modalController: ModalController,
    private http: HttpClient
  ) { }

  async ngOnInit() {  
    this.userLocation = {
      latitude: 0,
      longitude: 0,
      fullAddress: '',
    };
    this.showImage = true; 
    this.imageData = "assets/adi.jpg";     
    this.getLocation();

    this.openCamera();
    // / Call checkIn() after 5 seconds
      //  setTimeout(() => {
      //    this.checkin();
      //  }, 5000); // 5000 milliseconds = 5 seconds
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

  async openCamera() {
    //camera: 'rear', // 'front' or 'rear'
    // alpha: 1,
    const cameraPreviewOptions: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,      
      toBack: true,      
    };

    try {
      this.showImage = true; // Menampilkan elemen video
      await CameraPreview.start(cameraPreviewOptions);
      

      // Set timer untuk mengambil gambar setelah 2 menit
      // setTimeout(() => {
      //   this.takePicture();
      // }, 2000);
    } catch (error) {
      console.error('Error starting camera preview:', error);
    }
  }

  async takePicture() {
    // const video = this.videoElement.nativeElement;
    // const canvas = document.createElement('canvas');
    // canvas.width = video.videoWidth;
    // canvas.height = video.videoHeight;
    // const context = canvas.getContext('2d');
    // context?.drawImage(video, 0, 0, canvas.width, canvas.height);
    // this.imageData = canvas.toDataURL('image/jpeg');

    const pictureOptions: CameraPreviewPictureOptions = {
      quality: 90,
      // resultType: CameraPreviewResultType.Base64, // Mengambil gambar dalam format Base64
    };
    const imageData = await CameraPreview.capture(pictureOptions);
    console.log(imageData);

    await CameraPreview.stop();
    this.showImage = false;

    // fetch(this.imageData)
    //   .then(res => res.blob())
    //   .then(blob => {
    //     const formData = new FormData();
    //     formData.append('file', blob, 'image.jpg');
        
    //     this.http.post('http://192.168.1.8:5000/upload', formData)
    //       .subscribe(response => {
    //         console.log('Response from server:', response);
    //         this.handleResponse(response); // Handle the response
    //         // console.log(response[0].name);
    //         this.stopCamera();
    //       }, error => {
    //         console.error('Error uploading image:', error);
    //         this.stopCamera();
    //       });
    //   });
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

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            fullAddress: '',
          };
          // console.log('Panjibuwono:', "-6.150824086548097, 107.03808238114553");
          // console.log('AC4 No.25:', "-6.148626664954737, 107.03740646449049"); //-6.242304, 107.0104576
          // console.log('User location:', this.userLocation);
          //-6.148626664954737, 107.03740646449049
          // this.getLocationAddress(this.userLocation.latitude, this.userLocation.longitude);
          
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
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
          console.log(this.userLocation);
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
      console.log('Recognized Names:', this.recognizedNames);
      if (this.recognizedNames[0]!="") {
        this.getLocationAddress(this.userLocation.latitude, this.userLocation.longitude);
      }
    } else {
      console.error('Unexpected response format:', response);
    }
  }

  stopCamera() {
    const stream = this.videoElement.nativeElement.srcObject as MediaStream; // Menyatakan tipe stream
    if (stream) {
      const tracks: MediaStreamTrack[] = stream.getTracks(); // Menyatakan tipe tracks
      tracks.forEach((track: MediaStreamTrack) => track.stop()); // Menyatakan tipe track
    }
    this.videoElement.nativeElement.srcObject = null;
  }

}
