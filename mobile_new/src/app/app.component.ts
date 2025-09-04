
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
import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support';
import { StatusBar, Style } from '@capacitor/status-bar';

// import { SafeArea } from '@capacitor-community/safe-area';

import {
  PushNotifications,
  Token,
  PushNotificationSchema
} from '@capacitor/push-notifications';

import { LocalNotifications } from '@capacitor/local-notifications';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';

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
    private platform: Platform,
  ) { 

  }

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
    this.platform.ready().then(async () => {
      // console.log(StatusBar);
      //overlay = true then statusbar will be replace
      //overlay = false then statusbar will not replace
      // StatusBar.setOverlaysWebView({ overlay: false }); 
      // StatusBar.setStyle({ style: Style.Default });
      
      await EdgeToEdge.enable();
      const result = await EdgeToEdge.getInsets();
      console.log('Insets:', result);

      await EdgeToEdge.setBackgroundColor({ color: '#ffffff' });
      // await StatusBar.setOverlaysWebView({ overlay: false }); 
      await StatusBar.setStyle({ style: Style.Light });
    });
    
    const loading = await this.loading.create({
      message: 'Configure Server...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();  
    await this.config.loadConfig();
    //this.checkForUpdate();
    
    console.log(Capacitor.getPlatform());
    if (Capacitor.getPlatform() === 'android') {
        console.log("android");
        this.initializeFCM();
        await PushNotifications.addListener('registration', token => {
          this.config.fcm_token = token.value;
          console.info('Registration token: ', this.config.fcm_token);
        });
        await LocalNotifications.requestPermissions();
    }
   
    
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

  initializeFCM() {
    if (this.platform.is('android') || this.platform.is('ios')) {
            // Minta izin push notif
            PushNotifications.requestPermissions().then(permission => {
              if (permission.receive === 'granted') {
                // Register device
                PushNotifications.register();
              }
            });
            // console.log(Token)

            // Ketika token berhasil dibuat
            PushNotifications.addListener('registration', async (token: Token) => {
              console.log('FCM Token:', token.value);

              await this.config.getInstance().post("user/update-token", {
                username: this.config.username,
                fcm_token: token.value
              })
              .then(async (response) => {
                  console.log(response); 
                  console.log('Token terkirim ke backend');  
              })
              .catch((error) => {
                  console.log('Token gagal ke backend');
              });
               
              // // Simpan ke server kamu
              // this.http.post(this.config.getApiUrl() + '/user/update-token', {
              //   username: this.config.username, // atur sesuai struktur kamu
              //   token: token.value
              // }).subscribe(() => {
              //   console.log('Token terkirim ke backend');
              // });
            });

            // Jika error
            PushNotifications.addListener('registrationError', (error) => {
              console.error('Registration error:', error);
            });

            // Jika notifikasi masuk saat app aktif
            PushNotifications.addListener('pushNotificationReceived', async (notification: PushNotificationSchema) => {
              console.log('Notifikasi masuk saat app aktif:', notification);
              console.log(new Date(Date.now() + 100));
              await LocalNotifications.schedule({
                notifications: [
                  {
                    title: notification.title || 'Notifikasi',
                    body: notification.body || '',
                    id: Math.floor(Math.random() * 100000),
                    // schedule: { at: new Date("2025-07-07T16:19:00") },
                    // sound: null,
                    // attachments: null,
                    actionTypeId: '',
                    extra: notification.data,
                  }
                ]
              });
            });

            // Saat user klik notifikasi
            PushNotifications.addListener('pushNotificationActionPerformed', (action) => {
              console.log('User klik notifikasi:', action.notification);
            });

            // PushNotifications.addListener('pushNotificationActionPerformed', (action: PushNotificationActionPerformed) => {
            //   console.log('User klik notifikasi:', action.notification);
            //   // Bisa redirect ke halaman tertentu di sini
            // });
    }
  }


}
