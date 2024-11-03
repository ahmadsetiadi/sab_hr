import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { lastValueFrom } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { lastValueFrom } from 'rxjs/index';
import { throwError, of, EMPTY, Observable } from 'rxjs';
// import { GlobalService } from './/global.service';
// import { cn_api_url } from './constanta.js';

import { UtilService } from './util.service';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://192.168.1.21:3300'; // Ganti dengan URL API Anda

  constructor(
    private http: HttpClient,
    public referenceservice: UtilService,
    // private pub: GlobalService,
  ) { }

//   // GET request
//   async get<T>(endpoint: string): Promise<T> {
//     return await lastValueFrom(this.http.get<T>(`${this.apiUrl}/${endpoint}`));
//   }

//   // POST request
//   async post<T>(endpoint: string, body: any): Promise<T> {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json'
//     });    
//     return await lastValueFrom(this.http.post<T>(`${this.apiUrl}/${endpoint}`, body, { headers }));    
//   }

//   // PUT request
//   async put<T>(endpoint: string, body: any): Promise<T> {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json'
//     });
//     return await lastValueFrom(this.http.put<T>(`${this.apiUrl}/${endpoint}`, body, { headers }));
//   }

//   // DELETE request
//   async delete<T>(endpoint: string): Promise<T> {
//     return await lastValueFrom(this.http.delete<T>(`${this.apiUrl}/${endpoint}`));
//   }

postData<T>(endpoint: string, postData: T): Promise<T | null> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  // Create a Promise manually from the Observable
  return new Promise((resolve, reject) => {
    this.http.post<T>(`${this.apiUrl}/${endpoint}`, postData, { headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // console.log('Error occurred:', error);
          // console.log('Error details:', error.error);
          // console.log('Error message:', error.error.message);          
          // reject(error); // Reject the Promise with the error          
          // return new Observable();  // Return an empty Observable to avoid further processing
          if (error.error) {
            if (error.error.message) {
              this.referenceservice.showAlert("Error", error.error.message);
            } else {
              this.referenceservice.showAlert("ERROR SERVER", '');
            }
          } else {
            this.referenceservice.showAlert("ERROR SERVER", '');
          }
          
          return EMPTY;
        })
      )
      .subscribe(
        (response: any) => {
          // Resolve the Promise with the response body
          resolve(response.body);
        },
        (error) => {
          // Handle any errors thrown by subscribe if catchError did not handle it
          reject(error);
        }
      );
  });
}

// Usage example with await
async usePostData() {
  try {
    const response = await this.postData('your-endpoint', { your: 'data' });
    console.log('Response:', response);
  } catch (error) {
    console.error('Error in usePostData:', error);
  }
}

// oke
  // // POST request
  // async post<T>(endpoint: string, postData: any): Promise<T | string> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     // 'Authorization': 'Bearer ' + token, // Uncomment if you need to add authorization
  //   });

  //   try {
  //   //   console.log("b1");
  //     const response : any = await lastValueFrom(
  //       this.http.post<T>(`${this.apiUrl}/${endpoint}`, postData, { headers, observe: 'response' }).pipe(
  //         catchError((error: HttpErrorResponse) => {
  //           // Handle the error here
  //           console.log(error);
  //           console.log(error.error);
  //           console.log(error.error.message);

  //           // this.pub.presentToast(error.error.message);
  //           // console.log(error.status);
  //           // console.error('Error:', error);

  //           return ""; //return error;
  //           //return throwError(() => new Error('An error occurred'));
  //         })
  //       )
  //     );
  //   //   console.log("b2");
  //   //   console.log(response);
  //     // Check response status or content if needed
  //     if (response.status === 403 || response.status === 401) {
  //       console.log('Authorization error');
  //       // Handle authorization error
  //       return 'Authorization error';
  //     }
  //   //   console.log("b3");

  //     if (response.status === 200 || response.status === 0) {
  //       return response;
  //     } else {
  //       return 'error';
  //     }
  //   //   console.log("b4");
  //   } catch (error) {
  //   //   console.log("b5");
  //   //   console.error('Error:', error);
  //     return "abc";
  //   }
  // }

  getData<T>(endpoint: string, postData: T): Promise<T | null> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkaSIsIm5pcCI6bnVsbCwiZW1wbG95ZWVfaWQiOjEsImlhdCI6MTczMDUzMTA5NywiZXhwIjoxNzMxMjIyMjk3fQ.z8k094slp6jGkP7yoe5HFpmyp2TJ9upaO2XVpyXVJ_M'
    });
  
    // Create a Promise manually from the Observable
    return new Promise((resolve, reject) => {
      //       this.http.get<T>(`${this.apiUrl}/${endpoint}`, { headers, observe: 'response' }).pipe(
      this.http.get<T>(`${this.apiUrl}/${endpoint}`, { headers, observe: 'response' })
        .pipe(
          catchError((error: HttpErrorResponse) => {
            // console.log('Error occurred:', error);
            // console.log('Error details:', error.error);
            // console.log('Error message:', error.error.message);          
            // reject(error); // Reject the Promise with the error          
            // return new Observable();  // Return an empty Observable to avoid further processing
            if (error.error) {
              if (error.error.message) {
                this.referenceservice.showAlert("Error", error.error.message);
              } else {
                this.referenceservice.showAlert("ERROR SERVER", '');
              }
            } else {
              this.referenceservice.showAlert("ERROR SERVER", '');
            }
            
            return EMPTY;
          })
        )
        .subscribe(
          (response: any) => {
            // Resolve the Promise with the response body
            resolve(response.body);
          },
          (error) => {
            // Handle any errors thrown by subscribe if catchError did not handle it
            reject(error);
          }
        );
    });
  }

  // // GET request
  // async get<T>(endpoint: string): Promise<T | string> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     // 'Authorization': 'Bearer ' + token, // Uncomment if you need to add authorization
  //   });

  //   try {
  //     const response :any = await lastValueFrom(
  //       this.http.get<T>(`${this.apiUrl}/${endpoint}`, { headers, observe: 'response' }).pipe(
  //         catchError((error: HttpErrorResponse) => {
  //           // Handle the error here
  //           console.error('Error:', error);
  //           return throwError(() => new Error('An error occurred'));
  //         })
  //       )
  //     );

  //     return response;
  //   } catch (error) {
  //     console.error('Error:', error);
  //     return 'error';
  //   }
  // }

}
