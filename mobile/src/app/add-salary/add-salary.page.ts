import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.page.html',
  styleUrls: ['./add-salary.page.scss'],
})
export class AddSalaryPage implements OnInit {
  netSalary: any;
  basicPay: any
  da: any;
  hra: any;
  constructor(public util: UtilService, public alertController: AlertController) { }

  ngOnInit() {
  }
  calculate() {
    if (this.netSalary > 0) {
      this.basicPay = (this.netSalary / 100) * 60;
      this.da = (this.netSalary / 100) * 40;
      this.hra = (this.netSalary / 100) * 10;
    }
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: '<strong> Salary has been added successfully </strong>',
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
    alert.present();
  }
}
