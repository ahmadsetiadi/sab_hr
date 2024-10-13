import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { NavController, AlertController, Events, ModalController } from '@ionic/angular';
import { JsonService } from '../json.service';
import { ApiService } from '../api.service';
import { CreateInvoicePage } from '../create-invoice/create-invoice.page';
import { EditInvoicePage } from '../edit-invoice/edit-invoice.page';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {
  invoicesList = []
  time = 0;
  public role: any;
  public roleId: any;
  public primaryColor: any;
  public loading: any;
  public url: any;
  public token: any;
  // public invoicesList: any;
  public resp: any;
  public keywords: any = {};
  pageNumber = 1;
  // time = 0;
  page = false;
  noData = false;
  cssClass: string;
  constructor(public referenceservice: UtilService, public navContrl: NavController,
    public dataService: JsonService, public alertController: AlertController,
    public apiService: ApiService, public events: Events, public modalController: ModalController) {
    this.role = localStorage.getItem("role");
    this.roleId = localStorage.getItem("role_id");
    this.primaryColor = localStorage.getItem("primary_color");
    this.keywords = JSON.parse(localStorage.getItem('keywords'));
  }

  ngOnInit() {
    this.invoicesList = JSON.parse(JSON.stringify(this.dataService.invoiceList));
    this.invoicesList.sort((a, b) => a.invoice_id - b.invoice_id);
    this.invoicesList.forEach(element => {
      this.time = this.time + 0.2;
      element.time = this.time;
      element.converted_total_cost = '$' + element.total_cost;
      element.converted_payment_made = '$' + element.payment_made;

    });
    this.applyClassBySelection("bounceInRight");
  }

  async edit(invoice) {
    const modal = await this.modalController.create({
      component: EditInvoicePage,
      componentProps: {
        "invoice": invoice
      },
      cssClass: 'custom-modal',
    });
    this.referenceservice.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.referenceservice.isModal = "";
    })
  }
  async  createInvoice() {
    const modal = await this.modalController.create({
      component: CreateInvoicePage,
      cssClass: 'custom-modal',
      componentProps: {
        "invoice": ''
      }
    });
    this.referenceservice.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.referenceservice.isModal = "";
    })
  }


  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }


  openInvoice(invoice) {
    this.cssClass = "";
    this.navContrl.navigateForward('/view-invoice', { state: { 'invoice': invoice } });
  }
  generatePayslip(payslip) {
    this.cssClass = "";
    this.navContrl.navigateForward('/pay-slip', payslip);
  }

  getHeaderStyle() {
    return { background: this.primaryColor };
  }
  delete(index) {
    this.cssClass = '';
    this.referenceservice.deleteAlert("Confirm Delete", "Do you want to delete this invoice").then(res => {
      this.onDeleteConfirm(index);
    })
  }

  onDeleteConfirm(i) {
    let element = document.getElementById(i);
    element.classList.add('animated', 'rollOut', 'slow');
    element.addEventListener('animationend', (e => {
      this.invoicesList.splice(i, 1);
      this.referenceservice.showAlert('Smart HR', 'Invoice Removed successfully');
    }))
  }
}
