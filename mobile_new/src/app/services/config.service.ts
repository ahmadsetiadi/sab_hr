import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import axios from 'axios';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: any = {
    apiUrl: "",
    axiosInstance: null,
    version: "Version 1.0.0"
  };

  constructor(
    private http: HttpClient,
    private crypt: CryptoService,
  ) {}

  async loadConfig() {
    // console.log("laodconfig");
    const configUrl = `${document.baseURI}assets/config.json`;
    this.config = await firstValueFrom(this.http.get(configUrl)); //console.log(this.config);
    this.config.axiosInstance = axios.create({
        baseURL: this.config.apiUrl, // Gunakan URL dari ConfigService
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        },
    });

    // Menambahkan interceptor untuk menangani kesalahan
    this.config.axiosInstance.interceptors.response.use(
      response => response,
      error => {
        // Tangani kesalahan di sini
        if (error.response) {
          // Jika ada respons dari server
          if (error.response.status === 401) {
            // Anda bisa menampilkan notifikasi atau melakukan tindakan lain di sini
            // Misalnya, menampilkan pesan kesalahan
            // console.log("Unauthorized access - handle it gracefully");
          }
        }
        // Kembalikan kesalahan agar bisa ditangani di tempat lain
        return Promise.reject(error);
      }
    );
  }

  getApiUrl(): string {
    return this.config.apiUrl;
  }
  getInstance(): any {
    return this.config.axiosInstance;
  }
  getVersion(): any {
    return this.config.version;
  }
  

  getToken(): any {
    return new Promise(async resolve => {
      const data : any = localStorage.getItem('datasinar'); //console.log(data);   
      if (data==null || data==undefined) {
        resolve(null);
      } else {
        const data2 = this.crypt.decryptJson(data); //console.log(data2);
        const token = data2.token; 
        resolve(token);                       
      }      
    });
  }

  get(api: any) {
    return new Promise(async resolve => {
        if (this.config.axiosInstance==undefined) {
            // console.log("a");
            resolve(null);
        } else {
            const token = await this.getToken();
            await this.config.axiosInstance.get( api , {headers: {Authorization: 'Bearer ' + token} } )
            .then(async function (response) {
                resolve(response.data);    
            })
            .catch(function (error) {      
                console.log(error);                              
                resolve(null);
            });
        }                        
    });
  }
  post(api: any, postdata:any) {
    return new Promise(async resolve => {            
        if (this.config.axiosInstance==undefined) {
            // console.log("a");
            resolve(null);
        } else {
            const token = await this.getToken();
            await this.config.axiosInstance.post( api , postdata, {headers: {Authorization: 'Bearer ' + token} } )
            .then(async function (response) {
                resolve(response.data);    
            })
            .catch(function (error) {      
                console.log(error);          
                resolve(null);
            });
        }            
    }); 
  }

  
}
