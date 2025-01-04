import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { CryptoService } from './crypto.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {

  public isAuthenticated: boolean = false;

  constructor(
      private config: ConfigService,
      private crypt: CryptoService,
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
      const data : any = localStorage.getItem('datasinar'); console.log(data);   
      if (data==null) {
        this.isAuthenticated = false;
        resolve(false);
      } else {
          if (this.config.getInstance()==undefined) {
              console.log("Axios Instance not exists");
              // console.log("a");
              this.isAuthenticated = false;
              resolve(false);
          } else {
              try {
                const data2 = this.crypt.decryptJson(data); console.log(data2);
                const token = data2.token;
                await this.config.getInstance().post("protected", {}, {headers: {Authorization: 'Bearer ' + token} })
                  .then((response) => {
                      this.isAuthenticated = true;
                      resolve(true);    
                  })
                  .catch((error) => {
                      // console.log(error);
                      // Tangani kesalahan tanpa mencetak ke konsol
                      if (error.response && error.response.data && error.response.data.message) {
                          console.log(error.response.data.message); // Tampilkan pesan kesalahan
                      } else {
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
