/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ConfigService } from './services/config.service';
// import { IonicSelectableModule } from 'ionic-selectable';
import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';
import { LOCALE_ID } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx'; 
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

export function initializeApp(configService: ConfigService) {
  return () => configService.loadConfig();
}

registerLocaleData(localeId); 

@NgModule({
  declarations:
    [
      AppComponent
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    // IonicSelectableModule
  ],
  providers: [    
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    AndroidPermissions,    
    File,
    FileOpener,
    FileTransfer,
    { provide: LOCALE_ID, 
      useValue: 'id' 
    },
    ConfigService, // Pastikan ConfigService terdaftar di sini
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }

//  async takePicture_checkpoint2() {
//     this.util.show();
//     // const pictureOptions: CameraPreviewPictureOptions = {
//     //   quality: 40,      
//     // };
//     // const imageData = await CameraPreview.capture(pictureOptions);
//     // console.log(imageData);
//     // await CameraPreview.stop();
//     //const imageData = this.imageSource;
//     const data : any = {
//       "username": this.config.username,
//       "fulldate": moment().format('YYYY-MM-DD HH:mm:ss'),            
//       "inoutmode": "77",
//       "latitude": this.userLocation.latitude,
//       "longitude": this.userLocation.longitude,
//       "fulladdress": this.userLocation.fullAddress,
//       "imagedata": this.imageCamera.base64String,
//     }
//     console.log(data);
//     let a;
//     a = await this.config.post("/finger/upload-image", data); console.log(a);
//     this.util.hide();
//     if (a) {
//       if (a.finger_id) {
//         if (a.finger_id <=0) {
//           this.util.showToast("Error save", "danger", "top");
//         } else {
//           this.onSegmentChange({detail : {value: this.segment } })
//         }
//       } else {
//         this.util.showToast("Error save", "danger", "top");
//       }
//     } else {
//       this.util.showToast("Error save", "danger", "top");
//     }
//   }
  