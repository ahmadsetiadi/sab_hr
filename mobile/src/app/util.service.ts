import { Injectable } from '@angular/core';
import { NavController, AlertController, LoadingController, Events, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  isModal = ""
  constructor(public navCntrl: NavController, public router: Router, public activatedRoute: ActivatedRoute,
    public alertContrl: AlertController, public navControl: NavController, public loadingCtrl: LoadingController,
    public http: HTTP, public events: Events, public modalCtrl: ModalController, public storage: Storage) { }

  popBack() {
    this.navCntrl.pop();
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  async showAlert(header, message) {
    const alert = await this.alertContrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async showConfirmAlert(header, message, successMessage) {
    const confirm = await this.alertContrl.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'OK',
          handler: () => {
            this.showAlert("Smart HR", successMessage);
          },
        },
      ],
    });
    await confirm.present();
  }

  deleteAlert(header, message) {
    return new Promise((resolve) => {
      let self = this;
      async function asyncCall(self) {
        const confirm = await self.alertContrl.create({
          header: header,
          message: message,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {

              },
            },
            {
              text: 'OK',
              handler: () => {
                resolve('ok')
              },
            },
          ],
        });
        await confirm.present();
      }
      asyncCall(self);
    })
  }

  async logout(header, message, color) {
    const confirm = await this.alertContrl.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'OK',
          handler: () => {
            this.storage.clear();
            localStorage.clear();
            localStorage.setItem("colorCode", color);
            this.navControl.navigateRoot("/login");
          },
        },
      ],
    });
    await confirm.present();
  }

  loading() {
    let loading = this.loadingCtrl.create({
      message: 'Please wait..',
      duration: 2000
    });
    return loading;
  };

  postService(url, data, token) {
    return new Promise((resolve, reject) => {
      this.http.post(url, data, token).then(data => {
        console.log(data);
        resolve(data)
      }, error => {
        reject(error);
      });
    });
  }

  getService(url, data, token) {
    return new Promise((resolve, reject) => {
      this.http.get(url, data, token).then(data => {
        console.log(data);
        resolve(data)
      }, error => {
        reject(error);
      });
    });
  }

  getParams(key) {
    return new Promise((resolve, reject) => {
      this.activatedRoute.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          resolve(this.router.getCurrentNavigation().extras.state[key]);
        }
        else {
          reject('no-params');
        }
      });
    });
  }
}
