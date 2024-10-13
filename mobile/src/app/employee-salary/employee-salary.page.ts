import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { AddSalaryPage } from '../add-salary/add-salary.page';
import { EditSalaryPage } from '../edit-salary/edit-salary.page';

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.page.html',
  styleUrls: ['./employee-salary.page.scss'],
})
export class EmployeeSalaryPage implements OnInit {
  salaryList = [];
  constructor(public navContrl: NavController, public util: UtilService,
    public modalController: ModalController) {
    this.salaryList = [{ designation: "Web Backend Developer", eid: "2", salary: "800000" },
    { designation: "Web UI Developer", eid: "2", salary: "100000" },
    { designation: "Mobile Backend Developer", eid: "2", salary: "860000" },
    { designation: "Mobile UI Developer", eid: "2", salary: "750000" },
    { designation: "Backend Developer", eid: "2", salary: "680000" }]
  }

  ngOnInit() {
  }
  generatePayslip() {
    this.navContrl.navigateForward("/pay-slip");
  }
  addSalary() {
    this.navContrl.navigateForward("/add-salary");
  }
  async add() {
    const modal = await this.modalController.create({
      component: AddSalaryPage,
      cssClass: 'custom-modal',
    });
    this.util.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.util.isModal = "";
    })
  }
  async edit() {
    const modal = await this.modalController.create({
      component: EditSalaryPage,
      componentProps: {
        "invoice": "invoice"
      },
      cssClass: 'custom-modal',
    });
    this.util.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.util.isModal = "";
    })
  }
}
