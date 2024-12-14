import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataService } from './datastorage.service';

export const authGuard: CanActivateFn = (route, state) => {
    const isLoggedIn = localStorage.getItem('datasinar') !== null;
    const dataService = inject(DataService);
    
    if (!isLoggedIn) {
      // Jika tidak ada, arahkan ke halaman login
      const router = inject(Router); // Menggunakan inject untuk mendapatkan instance Router
      router.navigate(['']); // Ganti '/login' dengan path halaman login Anda
    //   localStorage.setItem("menu", "0");
      dataService.setAuthentication(false);
      return false;
    }
  
    // Jika ada, izinkan akses ke halaman
    // localStorage.setItem("menu", "1");
    dataService.setAuthentication(true);
    return true;
  };


