import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { BrandInfoPage } from '../brand-info/brand-info.page';
import { NavigationExtras } from '@angular/router';

import { Camera, CameraResultType } from '@capacitor/camera';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  @ViewChild('videoElement', { static: false }) videoElement: ElementRef;
  segment: string = 'checkin';
  imageData: string | undefined;
  recognizedNames: string[] = []; // Array to hold recognized names
  
  constructor(
    public util: UtilService,
    private modalController: ModalController,
    private http: HttpClient
  ) { }

  async ngOnInit() {    
  }  

  async openBrandInfo(name: any, image: any) {
    const modal = await this.modalController.create({
      component: BrandInfoPage,
      cssClass: 'long-modal',
      componentProps: { name: name, image: image }
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      if (data && data.data && data.data == 'products') {
        this.onProductList(name, image);
      }
    });
    await modal.present();
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
    // const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    // this.videoElement.nativeElement.srcObject = stream;
    // this.videoElement.nativeElement.play();
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.videoElement.nativeElement.srcObject = stream;
        this.videoElement.nativeElement.play();
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
  takePicture() {
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
        
        this.http.post('http://127.0.0.1:5000/upload', formData)
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

  handleResponse(response: any) {
    // Check if the response is an array
    if (Array.isArray(response)) {
      // Extract names from the response
      this.recognizedNames = response.map(item => item.name);
      console.log('Recognized Names:', this.recognizedNames);
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
