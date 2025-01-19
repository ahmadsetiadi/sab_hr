import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import axios from 'axios';
import { CryptoService } from './crypto.service';
import * as moment from 'moment';
import { UtilService } from 'src/app/services/util.service';
// import jwt from 'jsonwebtoken'; 

const JWT_SECRET = 'adiwafisinania'; // Ganti dengan kunci rahasia Anda
const JWT_EXPIRATION = '8d'; // 8 days

// function validateToken(token: string) {  
//   try {  
//     const decoded = jwt.verify(token, JWT_SECRET);  
//     console.log('Token valid:', decoded);  
//     return decoded; // Token valid, kembalikan payload  
//   } catch (error) {  
//     console.error('Token tidak valid:', error);  
//     return null; // Token tidak valid  
//   }  
// }  

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  private config: any = {
    apiUrl: "",
    pythonUrl: "",
    axiosInstance: null,
    version: "Version 1.0.0"
  };

  token: string;
  expired: string;
  superuser: number;
  user_id: number;
  usergroup_id: number;

  public user: any;
  public employee: any;
  public username: string;
  public employee_id: number;
  

  combodate: any = [
    {id: 1, name:"This Month" },
    {id: 2, name:"Today" },
    {id: 3, name:"Last 7 Days" },
    {id: 4, name:"Last 30 Days" },
    {id: 5, name:"Last 60 Days" },
    {id: 6, name:"Last 90 Days" },
  ]

  constructor(
    public util: UtilService,
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
    this.util.showToast("success create instance", "", "bottom");


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
      this.util.navigateRoot('');
    } else {
      const data2 = this.crypt.decryptJson(data); //console.log(data2);
      this.token= data2.token;
      this.expired= data2.expired;
      this.username= data2.username;
      this.superuser= data2.superuser;
      this.user_id= data2.user.id_user;
      this.employee_id = data2.employee.employee_id;
      this.usergroup_id = data2.user.id_usergroup;
      this.user = data2.user;
      this.employee = data2.employee;
      // this.util.showToast("success create global data", "", "bottom");
      // const result = validateToken(this.token);  console.log(result);
      // if (0==0) {
      //   // 'validasi jwt success
      //   this.util.navigateRoot('/tabs');
      // } else {
      //   this.util.navigateRoot('');
      // }
    }
  }

  

  refreshData() {
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
      this.employee_id = data2.employee.employee_id;
      this.usergroup_id = data2.user.id_usergroup;
      this.employee_id = data2.employee_id;
      this.user = data2.user;
      this.employee = data2.employee;
    }
  }

  getApiUrl(): string {
    return this.config.apiUrl;
  }
  getPythonUrl(): string {
    return this.config.pythonUrl;
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
            .catch((error) => {      
              console.log(error);      
              this.util.showToast(error.response.data.message, "danger", "middle");
              resolve(null);
          });
        }                        
    });
  }
  post(api: any, postdata:any) {
    return new Promise(async resolve => {            
        if (this.config.axiosInstance==undefined) {
            console.log("b1");
            resolve(null);
        } else {
            console.log("b2");
            const token = await this.getToken(); console.log("token", token);
            console.log("b2x");
            await this.config.axiosInstance.post( api , postdata, {headers: {Authorization: 'Bearer ' + token} } )
            .then(async function (response) {
                console.log("b3");
                resolve(response.data);    
            })
            .catch((error) => {      
              console.log(error);      
              this.util.showToast(error.response.data.message, "danger", "middle");
              resolve(null);
          });
        }            
    }); 
  }

  put(api: any, postdata:any) {
    return new Promise(async resolve => {    
      // this.util.showToast("", "danger", "middle");
        if (this.config.axiosInstance==undefined) {
            // console.log("a");
            resolve(null);
        } else {
            const token = await this.getToken();
            await this.config.axiosInstance.put( api , postdata, {headers: {Authorization: 'Bearer ' + token} } )
            .then(async function (response) {
                resolve(response.data);    
            })
            .catch((error) => {
                console.log(error);      
                this.util.showToast(error.response.data.message, "danger", "middle");
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
            }).catch((error) => {      
              console.log(error);      
              this.util.showToast(error.response.data.message, "danger", "middle");
              return null;
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
