import { Component, OnInit, ComponentRef } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UtilService } from '../util.service';
import { ChangePasswordPage } from '../change-password/change-password.page';
import { CompanySettingsPage } from '../company-settings/company-settings.page';
import { NotificationSettingsPage } from '../notification-settings/notification-settings.page';
import { EmailSettingsPage } from '../email-settings/email-settings.page';
import { LocationSettingsPage } from '../location-settings/location-settings.page';
import { SalarySettingsPage } from '../salary-settings/salary-settings.page';
import { InvoiceSettingsPage } from '../invoice-settings/invoice-settings.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  isPop: boolean = false;
  constructor(public navCntrl: NavController, public route: Router,
    public util: UtilService, public modalController: ModalController) { }

  ngOnInit() {
    this.isPop = (this.route.getCurrentNavigation().extras.state && this.route.getCurrentNavigation().extras.state.pageType && this.route.getCurrentNavigation().extras.state.pageType === "push");
    console.log(this.route.getCurrentNavigation());
  }
  async openModal(component) {
    const modal = await this.modalController.create({
      component: component,
      cssClass: 'custom-modal',
    });
    this.util.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.util.isModal = "";
    })
  }
  changePassword() {
    let component = ChangePasswordPage
    this.openModal(component);
  }
  companySettings() {
    let component = CompanySettingsPage
    this.openModal(component);
  }
  notificationSettings() {
    let component = NotificationSettingsPage
    this.openModal(component);
  }
  emailSettings() {
    let component = EmailSettingsPage
    this.openModal(component);
  }
  locationSettings() {
    let component = LocationSettingsPage
    this.openModal(component);
  }
  salarySettings() {
    let component = SalarySettingsPage
    this.openModal(component);
  }
  invoiceSettings() {
    let component = InvoiceSettingsPage
    this.openModal(component);
  }
  leaveType() {
    this.navCntrl.navigateForward('/leave-type');
  }
}
