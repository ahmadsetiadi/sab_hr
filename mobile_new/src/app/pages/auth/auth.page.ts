/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { CountryCodePickerPage } from '../country-code-picker/country-code-picker.page';

import { ConfigService } from 'src/app/services/config.service'; 
import { CryptoService } from 'src/app/services/crypto.service'; 
import { DataService } from 'src/app/services/datastorage.service'; 
import { NotificationService } from 'src/app/services/notification.service'; 

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  segment: any = 'signin';
  ccode: any = '🇮🇳 India';
  passwordView: boolean = false;
  username: string = 'adi'; // Tambahkan properti untuk username
  password: string = 'adi'; // Tambahkan properti untuk password

  constructor(
    public util: UtilService,
    private modalController: ModalController,
    private config: ConfigService,
    private notif: NotificationService,
    private crypt: CryptoService,
    private data: DataService
  ) { 
    // this.config.loadConfig();
  }

  async ngOnInit() {
    // const suc = await this.data.logicsuccess()
    // if (suc) {
    //   this.util.navigateRoot('/tabs');
    // } else {
    //   this.util.navigateRoot('');
    // }

    // localStorage.clear();
  }

  toggePassword() {
    this.passwordView = !this.passwordView;
  }

  async openCountryPicker() {
    const modal = await this.modalController.create({
      component: CountryCodePickerPage,
      cssClass: 'language-modal'
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      if (data && data.data && data.data != 'close') {
        const selected = this.util.countryCodes.filter(x => x.dial_code == data.data);
        console.log(selected);
        if (selected && selected.length) {
          this.ccode = selected[0].flag + ' ' + selected[0].name;
        }
      }
    });
    await modal.present();
  }

  async onLogin() {
    try {
        const res = await this.axiosLogin(this.username, this.password); //
        if (res) {
            console.log(res);
            const encryptedData = this.crypt.encryptJson(res); // Enkripsi JSON
            // console.log('Encrypted Data:', encryptedData);
            localStorage.setItem('datasinar', encryptedData);
            // const decryptedData = this.crypt.decryptJson(encryptedData);
            // console.log('Decrypted Data:', decryptedData);
            this.util.navigateRoot('/tabs');
            // console.log("Login success");
        } else {
            // Jika res adalah null, berarti login gagal, Anda bisa menambahkan logika tambahan di sini jika perlu
        }
    } catch (error) {
        // Tangani kesalahan di sini jika perlu
        console.error("Login error:", error);
    }
  }

  onRegister() {
    this.util.navigateToPage('/verify-sign-up');
  }

  onReset() {
    // this.util.navigateToPage('forgot-password');
  }

  axiosLogin(username:any, password:any) {        
    return new Promise(async resolve => {
        const data: any = { username: username, password: password };      
        if (this.config.getInstance()==undefined) {
            this.notif.show("Axios Instance not exists");
            console.log("a");
            this.data.setAuthentication(false);
            resolve(null);
        } else {
            try {
              await this.config.getInstance().post("user/login", data)
                .then(async (response) => {
                    this.data.setAuthentication(true);
                    resolve(response.data);    
                })
                .catch((error) => {
                    // console.log(error);
                    // Tangani kesalahan tanpa mencetak ke konsol
                    if (error.response && error.response.data && error.response.data.message) {
                        this.notif.show(error.response.data.message); // Tampilkan pesan kesalahan
                    } else {
                        this.notif.show("An unexpected error occurred."); // Tampilkan pesan default jika tidak ada pesan spesifik
                    }
                    this.data.setAuthentication(false);
                    resolve(null); // Kembalikan null atau objek kesalahan sesuai kebutuhan
                });
            } catch (error) {
              this.data.setAuthentication(false);
                // Tangani kesalahan di sini jika perlu
                console.error("Login xx error:", error);
            }
        }    

    });
}

}
