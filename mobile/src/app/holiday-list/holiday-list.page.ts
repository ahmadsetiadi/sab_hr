import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { ModalController } from '@ionic/angular';
import { AddHolidayPage } from '../add-holiday/add-holiday.page';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.page.html',
  styleUrls: ['./holiday-list.page.scss'],
})
export class HolidayListPage implements OnInit {

  constructor(public util: UtilService, public modalController: ModalController) { }

  ngOnInit() {
  }
  async add() {
    const modal = await this.modalController.create({
      component: AddHolidayPage,
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
