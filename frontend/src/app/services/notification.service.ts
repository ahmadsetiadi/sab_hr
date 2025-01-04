import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private toastController: ToastController) { }

    async show(message: any) {
        // position: 'top' | 'middle' | 'bottom'
        const toast = await this.toastController.create({
          message: message,
          duration: 1500,
          position: 'bottom',
        });
    
        await toast.present();
      }
}
