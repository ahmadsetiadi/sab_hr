import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import axios from 'axios';
import { CryptoService } from './crypto.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: any = {
    apiUrl: "",
    axiosInstance: null,
    version: "Version 1.0.0"
  };

  token: string;
  expired: string;
  public username: string;
  superuser: number;
  user_id: number;
  usergroup_id: number;

  combodate: any = [
    {id: 1, name:"This Month" },
    {id: 2, name:"Today" },
    {id: 3, name:"Last 7 Days" },
    {id: 4, name:"Last 30 Days" },
    {id: 5, name:"Last 60 Days" },
    {id: 6, name:"Last 90 Days" },
  ]

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

    const data : any = localStorage.getItem('datasinar'); //console.log(data);   
    if (data==null || data==undefined) {
      //;
    } else {
      const data2 = this.crypt.decryptJson(data); //console.log(data2);
      this.token= data2.token;
      this.expired= data2.expired;
      this.username= data2.username;
      this.superuser= data2.superuser;
      this.user_id= data2.user.id_user;
      this.usergroup_id = data2.user.id_usergroup;
    }
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

  put(api: any, postdata:any) {
    return new Promise(async resolve => {            
        if (this.config.axiosInstance==undefined) {
            // console.log("a");
            resolve(null);
        } else {
            const token = await this.getToken();
            await this.config.axiosInstance.put( api , postdata, {headers: {Authorization: 'Bearer ' + token} } )
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

  get2(api: any) {
    if (this.config.axiosInstance === undefined) {
        // Jika axiosInstance tidak terdefinisi, langsung kembalikan null
        //return Promise.resolve(null);
        return null;
    } else {
        const token = this.getToken(); // Ambil token
        return token.then(token => {
            return this.config.axiosInstance.get(api, {
                headers: { Authorization: 'Bearer ' + token }
            }).then(response => {
                console.log(response.data);
                return response.data; // Kembalikan data dari response
            }).catch(error => {
                console.log(error); // Log error
                return null; // Kembalikan null jika terjadi error
            });
        });
    }
  }

  updateDates(optionId: number): { startdate: string, enddate: string } {
    let startdate: string;
    let enddate: string;

    switch (optionId) {
      case 1: // This Month
        startdate = moment().startOf('month').format('YYYY-MM-DD'); // First day of the current month
        enddate = moment().endOf('month').format('YYYY-MM-DD'); // Last day of the current month
        break;
      case 2: // Today
        startdate = moment().format('YYYY-MM-DD'); // Today
        enddate = moment().format('YYYY-MM-DD'); // Today
        break;
      case 3: // Last 7 Days
        startdate = moment().subtract(7, 'days').format('YYYY-MM-DD'); // 7 days ago
        enddate = moment().format('YYYY-MM-DD'); // Today
        break;
      case 4: // Last 30 Days
        startdate = moment().subtract(30, 'days').format('YYYY-MM-DD'); // 30 days ago
        enddate = moment().format('YYYY-MM-DD'); // Today
        break;
      case 5: // Last 60 Days
        startdate = moment().subtract(60, 'days').format('YYYY-MM-DD'); // 60 days ago
        enddate = moment().format('YYYY-MM-DD'); // Today
        break;
      case 6: // Last 90 Days
        startdate = moment().subtract(90, 'days').format('YYYY-MM-DD'); // 90 days ago
        enddate = moment().format('YYYY-MM-DD'); // Today
        break;
      default:
        startdate = '';
        enddate = '';
        break;
    }

    return { startdate, enddate };
  }


  
}
