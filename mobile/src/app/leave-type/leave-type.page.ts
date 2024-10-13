import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { ViewLeavePage } from '../view-leave/view-leave.page';
import { AddLeaveTypePage } from '../add-leave-type/add-leave-type.page';
import { EditEmployeePage } from '../edit-employee/edit-employee.page';

@Component({
  selector: 'app-leave-type',
  templateUrl: './leave-type.page.html',
  styleUrls: ['./leave-type.page.scss'],
})
export class LeaveTypePage implements OnInit {
  leave: any = "pending"
  constructor(public navCntrl: NavController, public modalController: ModalController,
    public alertController: AlertController, public util: UtilService) { }

  ngOnInit() {
  }

  async addLeaveType() {
    const modal = await this.modalController.create({
      component: AddLeaveTypePage,
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
      component: EditEmployeePage,
      cssClass: 'custom-modal',
    });
    this.util.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.util.isModal = "";
    })
  }
  editLeaveType() {
    this.navCntrl.navigateForward('/edit-leave-type');
  }

  async deleteLeaveType() {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Do you want to delete this Leave',
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
            this.successAlert()
          }
        }
      ]
    });
    await alert.present();
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: '<strong> Leave Removed Successfully </strong>',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
  async leaveDetail() {
    const modal = await this.modalController.create({
      component: ViewLeavePage,
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
