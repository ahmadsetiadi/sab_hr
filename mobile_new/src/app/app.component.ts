/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component } from '@angular/core';
import { UtilService } from './services/util.service';
import { NavigationExtras } from '@angular/router';
import { ConfigService } from './services/config.service';
import { DataService } from './services/datastorage.service';
import { LoadingController } from '@ionic/angular';

import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isMenuVisible: boolean = false;
  
  constructor(
    public util: UtilService,
    public config: ConfigService,
    public data: DataService,
    private loading: LoadingController,
    private file: File,
    private transfer: FileTransfer,
    private androidPermissions: AndroidPermissions,
    private fileOpener: FileOpener,
    private alertController: AlertController,
    private http: HttpClient,
  ) { 
    // this.data.loadconfig();
  }

  // async requestPermissions() {
  //   const permissions = [
  //     this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
  //     this.androidPermissions.PERMISSION.REQUEST_INSTALL_PACKAGES
  //   ];

  //   for (const permission of permissions) {
  //     const status = await this.androidPermissions.checkPermission(permission);
  //     if (status.hasPermission) {
  //       console.log(permission + ' already granted');
  //     } else {
  //       const request = await this.androidPermissions.requestPermission(permission);
  //       if (request.hasPermission) {
  //         console.log(permission + ' granted');
  //       } else {
  //         console.log(permission + ' denied');
  //       }
  //     }
  //   }
  // }
  installAPK(apkPath: string) {
    console.log("a5");
    console.log(apkPath)
    this.fileOpener.open(apkPath, 'application/vnd.android.package-archive')
      .then(() => {
        console.log('File is opened');
      })
      .catch(e => {
        console.log('Error opening file', e);
      });
  }

  async checkForUpdate() {    
    const versionUrl =  this.config.getemailUrl()  + 'version';
    const a = await this.http.get(versionUrl, { responseType: 'json' }).subscribe(async json => {
      
      console.log(json);
      const data: any = json; console.log(data);
      const versionInfo = data.version;
      const currentVersion = this.config.getVersion();

      if (versionInfo > currentVersion) {
        const alert: any= await this.alertController.create({
          header: 'Update Tersedia',
          message: 'Versi terbaru ' + versionInfo + ' tersedia. Apakah Anda ingin memperbarui aplikasi?',
          buttons: [
            {
              text: 'Batal',
              role: 'cancel',
              cssClass: 'secondary'
            }, {
              text: 'Perbarui',
              handler: () => {
                this.downloadAndInstallAPK(data.downloadUrl);
              }
            }
          ]
        });
        await alert.present();
      }
    
    }, error => {
      this.util.showToast('Error downloading the file', '', 'middle');      
    });

    
  }

  async downloadAndInstallAPK(downloadUrl: string) {
    // if (this.platform.is('android')) {
      await this.requestPermissions();

      const apkName = 'app-release.apk';
      const apkPath = this.file.externalApplicationStorageDirectory + apkName;
      console.log(downloadUrl);
      
      const loading = await this.loading.create({
        message: 'Download File...',
        spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
      });
      await loading.present();

      this.http.get(downloadUrl, { responseType: 'blob' }).subscribe(async (blob) => {
        console.log("a6");
        const fileWriter = this.file.writeFile(this.file.externalApplicationStorageDirectory, apkName, blob, { replace: true });
        console.log("a7");
        fileWriter.then(async () => {
          console.log("a8");
          await loading.dismiss();
          this.installAPK(apkPath);
        }).catch(async (error) => {
          await loading.dismiss();
          console.error('Error writing file: ', error);
        });
      }, async (error) => {
        await loading.dismiss();
        console.error('Download error: ', error);
      });
    // }
  }

  async requestPermissions() {
    const permissions = [
      this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
      this.androidPermissions.PERMISSION.REQUEST_INSTALL_PACKAGES
    ];

    for (const permission of permissions) {
      const status = await this.androidPermissions.checkPermission(permission);
      if (!status.hasPermission) {
        await this.androidPermissions.requestPermission(permission);
      }
    }
  }

  async ngOnInit() {
    const loading = await this.loading.create({
      message: 'Configure Server...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();  
    await this.config.loadConfig();
    //this.checkForUpdate();
    await loading.dismiss();
  }

  async onLogout() {
    localStorage.clear();
    this.util.navigateRoot("");
  }

  onRunPayroll() {
    this.util.navigateRoot("payroll/run-payroll");
  }

  onPage(name: any) {
    this.util.navigateRoot(name);
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

  onTopProduct(name: any) {
    const param: NavigationExtras = {
      queryParams: {
        name: name,
      }
    };
    this.util.navigateToPage('product-list', param);
  }
}
