import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { CryptoService } from './crypto.service';
import { UtilService } from 'src/app/services/util.service';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class DataService {

  public isAuthenticated: boolean = false;

  constructor(
      private config: ConfigService,
      private crypt: CryptoService,
      public util: UtilService,
      private loading: LoadingController,
  ) {
    this.config.loadConfig()
  }

  async loadconfig() {
    this.config.loadConfig();
  }
  checkAuthentication(): boolean {
    return this.isAuthenticated;
  }

  setAuthentication(state: boolean) {
    this.isAuthenticated = state;
  }

  
  getListEmployeeID(): any {
    return new Promise(async resolve => {
      const data : any = localStorage.getItem('datasinar'); //console.log(data);   
      if (data==null || data==undefined) {
        resolve("");
      } else {
        const data2 = this.crypt.decryptJson(data); //console.log(data2);
        const token = data2.user.listemployeeid; 
        resolve(token);                       
      }      
    });
  }

  async logicsuccess() {
    return new Promise(async resolve => {
      const data : any = localStorage.getItem('datasinar'); //console.log(data);   
      if (data==null) {
        this.isAuthenticated = false;
        resolve(false);
      } else {
          if (this.config.getInstance()==undefined) {
            this.util.showToast("Axios Instance not exists", "danger", "middle");
              // console.log("Axios Instance not exists");
              // console.log("a");
              this.isAuthenticated = false;
              resolve(false);
          } else {
              try {
                const data2 = this.crypt.decryptJson(data); console.log(data2);
                const token = data2.token;
                this.util.showToast("Trying check token", "", "top");
                
                const loading = await this.loading.create({
                  message: 'Checking Server...',
                  spinner: 'bubbles', // Anda bisa memilih spinner lain sesuai kebutuhan
                });
                await loading.present();

                const timeoutDuration = 65000; // 5000 milliseconds = 5 seconds  
  
                const timeoutPromise = new Promise((resolve, reject) => {  
                    setTimeout(() => {  
                        reject(new Error('Request timed out'));  
                    }, timeoutDuration);  
                });  
                  
                console.log(this.config.getApiUrl());
                const postRequestPromise = this.config.getInstance().post("protected", {}, { headers: { Authorization: 'Bearer ' + token } });  
                  
                Promise.race([postRequestPromise, timeoutPromise])  
                    .then((response) => {  
                        loading.dismiss();
                        this.isAuthenticated = true;  
                        resolve(true);  
                    })  
                    .catch((error) => {  
                        loading.dismiss();
                        if (error.message === 'Request timed out') {                              
                            console.log('Request timed out');  
                            this.util.showToast('timeout connect to server', 'danger', 'middle');  
                        } else if (error.response && error.response.data && error.response.data.message) {  
                            console.log(error.response.data.message);  
                            this.util.showToast(error.response.data.message, 'danger', 'top');  
                        } else {  
                            console.log(error);  
                            this.util.showToast('failed connect to server, server is down', '', 'middle');  
                        }  
                        this.isAuthenticated = false;  
                        resolve(false);  
                    });  

              } catch (error) {
                  resolve(false);
              }
          }    
      }

    });
  }

  async logicsuccess2() {
    return new Promise(async resolve => {
      const data : any = localStorage.getItem('datasinar'); console.log(data);   
      if (data==null) {
        this.isAuthenticated = false;
        resolve(false);
      } else {
          if (this.config.getInstance()==undefined) {
            this.util.showToast("Axios Instance not exists", "danger", "top");
              // console.log("Axios Instance not exists");
              // console.log("a");
              this.isAuthenticated = false;
              resolve(false);
          } else {
              try {
                const data2 = this.crypt.decryptJson(data); console.log(data2);
                const token = data2.token;
                this.util.showToast("Trying check token", "", "top");
                await this.config.getInstance().post("protected", {}, {headers: {Authorization: 'Bearer ' + token} })
                  .then((response) => {
                      this.isAuthenticated = true;
                      resolve(true);    
                  })
                  .catch((error) => {
                      // console.log(error);
                      // Tangani kesalahan tanpa mencetak ke konsol
                      if (error.response && error.response.data && error.response.data.message) {
                          this.util.showToast(error.response.data.message, "danger", "top");
                          console.log(error.response.data.message); // Tampilkan pesan kesalahan
                      } else {
                          console.log(error);
                          this.util.showToast("An unexpected error occurred.", "danger", "top");
                          console.log("An unexpected error occurred."); // Tampilkan pesan default jika tidak ada pesan spesifik
                      }
                      this.isAuthenticated = false;
                      resolve(false); // Kembalikan null atau objek kesalahan sesuai kebutuhan
                  });
              } catch (error) {
                  resolve(false);
              }
          }    
      }

    });
  }

}
