import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { AddDepartmentPage } from '../add-department/add-department.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.page.html',
  styleUrls: ['./departments.page.scss'],
})
export class DepartmentsPage implements OnInit {

  constructor(public util: UtilService, public modalController: ModalController) { }

  ngOnInit() {
  }
  async add() {
    const modal = await this.modalController.create({
      component: AddDepartmentPage,
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
