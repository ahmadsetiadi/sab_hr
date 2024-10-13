import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.page.html',
  styleUrls: ['./edit-expense.page.scss'],
})
export class EditExpensePage implements OnInit {
  showClient;
  constructor(public util: UtilService, public alertController: AlertController) { }

  ngOnInit() {
  }
  async create() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: '<strong>Expense Updated successfully</strong>',
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
