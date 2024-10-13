import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage implements OnInit {
  showClient = false;
  constructor(public util: UtilService, public alertController: AlertController) { }

  ngOnInit() {
  }
  async create() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: '<strong>Expense has been added successfully</strong>',
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
