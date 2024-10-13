import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { EditExpensePage } from '../edit-expense/edit-expense.page';
import { AddExpensePage } from '../add-expense/add-expense.page';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage implements OnInit {
  expenses = [];
  constructor(public util: UtilService, public navContrl: NavController, public modalController: ModalController,
    public alertController: AlertController) {
    this.expenses = [{ title: "Smart HR", amount: "12543", company: "Dream's Tech", category: "Travel", date: "17 Nov 2018" },
    { title: "Smart HR", amount: "12543", company: "Dream's Tech", category: "Travel", date: "17 Nov 2019" },
    { title: "hrms new", amount: "121253", company: "Dream's Tech", category: "Travel", date: "17 Jan 2017" },
    { title: "hrms hrms", amount: "5453", company: "Dream's Tech", category: "Travel", date: "27 Nov 2018" },
    { title: "Smart HR", amount: "1243", company: "Dream's Tech", category: "Travel", date: "17 Nov 2020" },
    { title: "Smart HR", amount: "143543", company: "Dream's Tech", category: "Travel", date: "07 Nov 2020" },
    { title: "Smart HR", amount: "12543", company: "Dream's Tech", category: "Travel", date: "17 Nov 2018" },
    { title: "Smart HR", amount: "1125", company: "Dream's Tech", category: "Travel", date: "17 Dec 2018" },
    { title: "Smart HR", amount: "12543", company: "Dream's Tech", category: "Travel", date: "17 Oct 2018" }]
  }

  ngOnInit() {
  }

  async edit() {
    const modal = await this.modalController.create({
      component: EditExpensePage,
      cssClass: 'custom-modal',
    });
    this.util.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.util.isModal = "";
    })
  }
  openExpense(Details) {
    this.navContrl.navigateForward("/view-expense", { state: { 'expense': Details } });
  }
  async addExpenses() {
    const modal = await this.modalController.create({
      component: AddExpensePage,
      cssClass: 'custom-modal',
    });
    this.util.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.util.isModal = "";
    })
  }

  async delete(i) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Do you want to delete this Expense',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
            this.successAlert(i);
          }
        }
      ]
    });
    await alert.present();
  }

  successAlert(i) {
    let element = document.getElementById(i);
    element.classList.add('animated', 'rollOut', 'slow');
    element.addEventListener('animationend', (e => {
      this.expenses.splice(i, 1);
      this.util.showAlert('Smart HR', 'Expense Removed successfully');
    }))
  }
}
