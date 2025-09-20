
import { Component } from '@angular/core';
import { UtilService } from './services/util.service';
import { NavigationExtras } from '@angular/router';
import { ConfigService } from './services/config.service';
import { DataService } from './services/datastorage.service';
import { LoadingController } from '@ionic/angular';

import { Filesystem, Directory, Encoding, WriteFileResult  } from '@capacitor/filesystem';
// import { Http } from '@capacitor-community/http';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support';
import { StatusBar, Style } from '@capacitor/status-bar';

// import { SafeArea } from '@capacitor-community/safe-area';
// import { AppUpdate } from '@capawesome/capacitor-app-update';

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
      console.log("aa");
      // await this.showLocalNotification();
      console.log("bb");

      // const res = await AppUpdate.getAppUpdateInfo(); console.log(res);
      // if (Capacitor.getPlatform() === 'android') {
      //   return res.currentVersionCode;
      // } else {
      //   return res.currentVersionName;
      // }
      // if (confirm(`Versi baru tersedia. Mau update?`)) {
      //   console.log("yes update");
      //   // this.downloadAndInstall(latest.apkUrl);
      //   this.downloadAndInstall("\\10.147.17.134\web\mobile\sinar_v1_1_7.apk");
      // } else {
      //   console.log("no update");
      // }

    });

    
    
    const loading = await this.loading.create({
      message: 'Configure Server...',
      spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
    });
    await loading.present();  
    await this.config.loadConfig();
    
    
    // console.log(Capacitor.getPlatform());
    // if (Capacitor.getPlatform() === 'android') {
    //     console.log("android");
    //     this.initializeFCM();
    //     await PushNotifications.addListener('registration', token => {
    //       this.config.fcm_token = token.value;
    //       console.info('Registration token: ', this.config.fcm_token);
    //     });
    //     await LocalNotifications.requestPermissions();
    // }
   
    
    await loading.dismiss();
  }

  // convertBlobToBase64(blob: Blob) {
  //   return new Promise((resolve, reject) => {
  //     // console.log(blob);
  //     // const reader = new FileReader();
  //     // console.log("x1");
  //     // reader.onerror = reject;
  //     // console.log("x2");
  //     // reader.onload = () => resolve(reader.result);
  //     // console.log("x3");
  //     // reader.readAsDataURL(blob);
  //     // console.log("x4");
  //     const reader = new FileReader();
  //     reader.onerror = reject;
  //     reader.onload = () => {
  //       const dataUrl = reader.result as string; // hasil data URL
  //       const base64 = dataUrl.split(',')[1];    // ambil hanya bagian base64
  //       resolve(base64);
  //     };
  //     reader.readAsDataURL(blob);
  //   });
  // }
  async blobToBase64(blob: Blob): Promise<string> {
    return new Promise(async (resolve, reject) => {  
        const buffer = await blob.arrayBuffer();         // ambil ArrayBuffer dari blob
        const bytes = new Uint8Array(buffer);            // ubah ke byte array
        let binary = '';
        const chunkSize = 0x8000; // biar gak error di file besar

        for (let i = 0; i < bytes.length; i += chunkSize) {
          const chunk = bytes.subarray(i, i + chunkSize);
          binary += String.fromCharCode.apply(null, Array.from(chunk));
        }

        resolve(btoa(binary)); // hasil pure base64 string
    });  
    
  }

  async downloadAndInstall(apkUrl: string) {
    // ini oke sampe download file, hanya gagal open apk & install
    this.http.get<any>("http://192.168.1.3:3000/download/apk/").subscribe(async (response) => {
      try {
        const base64Data = response.data; // ambil base64string dari backend
        console.log(base64Data);
        // 1. Simpan file ke storage Android
        const result: WriteFileResult = await Filesystem.writeFile({
          path: response.filename || 'update.apk',
          data: base64Data,
          directory: Directory.Documents, // agar bisa diakses installer
        });
        console.log("test");
        console.log(result.uri);
        // 2. Buka file APK → trigger installer Android
        await this.fileOpener.open(
          result.uri,
          response.mimeType || 'application/vnd.android.package-archive'
        );

      } catch (err) {
        console.error('Gagal download/install APK', err);
      }
    });
  }
  
  // async downloadAndInstall(apkUrl: string) {
  //   console.log("tessssssssssssssssssssssssssssssssssss");
  //   this.http.get("http://192.168.1.3:3000/download/apk/", { responseType: 'blob' }).subscribe(async (blob) => {
  //     try {
  //       console.log(blob);
  //       // 1. Ubah blob jadi base64 (karena Filesystem Capacitor hanya terima string)
  //       const base64Data = await this.blobToBase64(blob) as string;
  //       console.log("resullllllllllllllllllllllllllllllllllllll");
  //       console.log(base64Data);
  //       // 2. Simpan file ke storage
  //       const result: WriteFileResult = await Filesystem.writeFile({
  //         path: 'update.apk',
  //         data: base64Data,
  //         directory: Directory.Documents, // External agar bisa diakses installer
  //       });
  //       console.log("2222222222222222222222222222222222222222222222");

  //       // 3. Buka file APK untuk install
  //       await this.fileOpener.open(result.uri, 'application/vnd.android.package-archive');
  //     } catch (err) {
  //       console.error('Gagal download/install APK', err);
  //     }
  //   });
  // }

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
                    largeIcon: 'res://drawable/ic_stat_logo',
                    smallIcon: 'res://drawable/ic_stat_logo',
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

  async showLocalNotification() {
        await LocalNotifications.schedule({
            notifications: [
                {
                    // allowWhileIdle: true,
                    largeIcon: 'res://drawable/ic_stat_logo',
                    smallIcon: 'res://drawable/ic_stat_logo',
                    title: "Absensi",
                    body: "Jangan lupa absen hari ini",
                    schedule: { at: new Date("2025-09-20T11:20:00") },
                    id: 111 // Math.ceil(Math.random() * 100), // any random int
                    // schedule: { at: new Date(Date.now() + 1000 * 5) },                    
                }
            ]
        });
  }



}
