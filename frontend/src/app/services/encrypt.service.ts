import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})
export class EncryptService {
  private secretKey: string = 'adiniawafisina'; // Ganti dengan kunci rahasia Anda

  constructor() {}

  // Metode untuk mengenkripsi JSON
  encryptJson(jsonData: any): string {
    const jsonString = JSON.stringify(jsonData); // Mengubah JSON menjadi string
    const encrypted = CryptoJS.AES.encrypt(jsonString, this.secretKey).toString(); // Enkripsi
    return encrypted; // Mengembalikan string terenkripsi
  }

  // Metode untuk mendekripsi JSON
  decryptJson(encryptedData: string): any {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey); // Dekripsi
    const decrypted = bytes.toString(CryptoJS.enc.Utf8); // Mengubah bytes menjadi string
    return JSON.parse(decrypted); // Mengubah string kembali menjadi JSON
  }    
}
