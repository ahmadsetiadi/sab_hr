/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { register } from 'swiper/element';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';
import * as moment from 'moment'; // Mengimpor Moment.js
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { Capacitor } from '@capacitor/core';
import { lastValueFrom } from 'rxjs';
import { Filesystem, Directory } from '@capacitor/filesystem';

register();
@Component({
  selector: 'app-notif-list',
  templateUrl: './notif-list.page.html',
  styleUrls: ['./notif-list.page.scss'],
})
export class NotifListPage implements OnInit {
  @ViewChild('dateSelect', { static: false }) dateSelect: IonSelect;

  datasource: any = [];
   
  constructor(
    public util: UtilService,
    private route: ActivatedRoute,
    public http: ConfigService,
    private httpclient: HttpClient,
    private loading: LoadingController,
    public config: ConfigService,
  ) { }

  ngOnInit() {
  }  
  ionViewWillEnter() {
    this.loadData();
  }

  async loadData() {
    const tahun : string = moment().format('YYYY'); 

    const loading = await this.loading.create({
      message: 'Please wait...',
      spinner: 'bubbles', 
    });
    await loading.present();
    
    const url = "/notif/"+this.http.username; console.log(url);
    const a = await this.http.get(url);
    this.datasource = a; console.log(this.datasource)
    await loading.dismiss();
    console.log(this.datasource);        
  }

  onBack() {
    this.util.navigateRoot("tabs/home");
  }
  // async downloadExcel() {
  //     const loading = await this.loading.create({
  //         message: 'Please wait...',
  //         spinner: 'bubbles', 
  //     });
  //     await loading.present();

  //     const baseUrl = this.config.getApiUrl() + 'vad/export-to-excel';
  //     const params =
  //       `?startdate=${this.startdate}` +
  //       `&enddate=${this.enddate}` +
  //       `&username=${this.config.username}` +
  //       `&sendemail=0` +
  //       `&search=${this.search}`; 
  //     const isAndroid = Capacitor.getPlatform() === 'android';
  //     const url = isAndroid ? baseUrl + params + `&base64=1` : baseUrl + params;
  //     console.log(url);
  //     if (isAndroid) {        
  //       try {
  //         const data: any = await lastValueFrom(this.httpclient.get(url)); 
  //         const fileName = data.filename || `claim_${Date.now()}.xlsx`;          
  //         await Filesystem.writeFile({
  //           path: fileName,
  //           data: data.filedata,
  //           directory: Directory.Documents,
  //           recursive: true,
  //         }); 
  //         loading.dismiss();
  //         this.util.showToast("save to Document, filename: "+fileName, "success", "middle"); 
  //       } catch (err) {
  //         loading.dismiss();
  //         console.log(err);
  //         this.util.showToast("❌ Error saving file on Android: "+err, "danger", "middle");
  //       }
  //     } else {
  //       console.log("a8");
  //       loading.dismiss();
  //       this.httpclient.get(url, { responseType: 'blob' }).subscribe(blob => {
  //         const fileName = `claim_${Date.now()}.xlsx`;
  //         const blobUrl = window.URL.createObjectURL(blob);
  //         const a = document.createElement('a');
  //         a.href = blobUrl;
  //         a.download = fileName;
  //         document.body.appendChild(a);
  //         a.click();
  //         document.body.removeChild(a);
  //         window.URL.revokeObjectURL(blobUrl);
  //       });
  //     }
  // }

}
