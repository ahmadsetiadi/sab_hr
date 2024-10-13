import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-crete-estimate',
  templateUrl: './crete-estimate.page.html',
  styleUrls: ['./crete-estimate.page.scss'],
})
export class CreteEstimatePage implements OnInit {
  unitCost: number;
  tax: number;
  qty: number;
  taxTotal: number;
  constructor(public alertController: AlertController, public util: UtilService) { }

  ngOnInit() {
  }
  itemChanged(event) {
    if (event.target.value === "f&d") {
      this.unitCost = 400.00
      this.tax = 18.00
    }
    else {
      this.unitCost = 500.00
      this.tax = 0.00
    }
    if (!this.qty) {
      this.taxTotal = ((+this.unitCost / 100) * +this.tax) * 1
    }
    else {
      this.taxTotal = ((+this.unitCost / 100) * +this.tax) * this.qty
    }
  }
  qtyChanged(event) {
    this.qty = event.target.value;
    this.taxTotal = ((+this.unitCost / 100) * +this.tax) * this.qty
  }
  async success() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: '<strong>Estimate created Successfully</strong>',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    this.util.dismissModal();
    await alert.present();
  }

}
