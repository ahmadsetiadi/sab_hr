import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-salary',
  templateUrl: './edit-salary.page.html',
  styleUrls: ['./edit-salary.page.scss'],
})
export class EditSalaryPage implements OnInit {
  netSalary: any = 100000;
  basicPay: any
  da: any;
  hra: any;
  constructor(public util: UtilService, public activeRoute: ActivatedRoute, public alertController: AlertController,
    public navContrl: NavController) { }

  ngOnInit() {
    this.calculate();
  }
  popBack() {
    this.navContrl.pop();
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
      message: '<strong> Salary has been Updated successfully </strong>',
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
