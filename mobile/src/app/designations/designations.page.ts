import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { AddDesignationPage } from '../add-designation/add-designation.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-designations',
  templateUrl: './designations.page.html',
  styleUrls: ['./designations.page.scss'],
})
export class DesignationsPage implements OnInit {

  constructor(public util: UtilService, public modalController: ModalController) { }

  ngOnInit() {
  }
  // async add() {
  //   const modal = await this.modalController.create({
  //     component: ,
  //     cssClass: 'custom-modal',
  //   });
  //   this.util.isModal = "blurPage";
  //   await modal.present();
  //   await modal.onWillDismiss().then(data => {
  //     console.log(data);
  //     this.util.isModal = "";
  //   })
  // }
  async add() {
    const modal = await this.modalController.create({
      component: AddDesignationPage,
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
