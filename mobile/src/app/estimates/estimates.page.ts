import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Events, ModalController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { JsonService } from '../json.service';
import { EditEstimatePage } from '../edit-estimate/edit-estimate.page';
import { CreteEstimatePage } from '../crete-estimate/crete-estimate.page';

@Component({
  selector: 'app-estimates',
  templateUrl: './estimates.page.html',
  styleUrls: ['./estimates.page.scss'],
})
export class EstimatesPage implements OnInit {
  estimates = []
  time = 0;
  cssClass = ''
  constructor(public navContrl: NavController, public dataService: JsonService,
    public events: Events, public alertController: AlertController, public modalController: ModalController,
    public util: UtilService) {
    this.estimates = [{ invoiceNo: "2154", amount: "12543", company: "Dream's Tech", status: "accepted" },
    { invoiceNo: "1465", amount: "12543", company: "Dream's Tech", status: "accepted" },
    { invoiceNo: "34324", amount: "121253", company: "Dream's Tech", status: "accepted" },
    { invoiceNo: "53436", amount: "5453", company: "Dream's Tech", status: "pending" },
    { invoiceNo: "43234", amount: "1243", company: "Dream's Tech", status: "rejected" },
    { invoiceNo: "35521", amount: "143543", company: "Dream's Tech", status: "pending" },
    { invoiceNo: "35864", amount: "12543", company: "Dream's Tech", status: "accepted" },
    { invoiceNo: "35824", amount: "1125", company: "Dream's Tech", status: "rejected" },
    { invoiceNo: "35984", amount: "12543", company: "Dream's Tech", status: "pending" }]
  }

  ngOnInit() {
    this.estimates.forEach(element => {
      this.time = this.time + 0.2;
      element.time = this.time;
    });
    console.log(this.estimates)
    this.applyClassBySelection('bounceInRight');
  }
  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }

  openView() {
    this.navContrl.navigateForward('/view-estimates');
  }
  delete(i) {
    this.util.deleteAlert("Confirm Delete", "Do you want to delete this estimate").then(res => {
      this.onDeleteConfirm(i);
    })
  }
  async edit() {
    const modal = await this.modalController.create({
      component: EditEstimatePage,
      componentProps: {
        "invoice": this.dataService.invoiceList[0],
        "type": 'Estimate'
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
  async add() {
    const modal = await this.modalController.create({
      component: CreteEstimatePage,
      cssClass: 'custom-modal',
      componentProps: {
        "invoice": this.dataService.invoiceList[0],
        "type": 'Estimate'
      },
    });
    this.util.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.util.isModal = "";
    })
  }
  onDeleteConfirm(i) {
    let element = document.getElementById(i);
    element.classList.add('animated', 'rollOut', 'slow');
    element.addEventListener('animationend', (e => {
      this.estimates.splice(i, 1);
      this.util.showAlert('Smart HR', 'Estimate Removed successfully');
    }))
  }
}
