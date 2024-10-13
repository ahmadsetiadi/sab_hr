import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController, Events, ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { UtilService } from '../util.service';
import { HTTP } from '@ionic-native/http/ngx';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { JsonService } from '../json.service';
import { EditClientPage } from '../edit-client/edit-client.page';
import { AddClientPage } from '../add-client/add-client.page';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  faEllipsis = faEllipsisV
  token: any;
  url: any;
  loading: any;
  clientList: any;
  pageNumber = 1;
  resp: any;
  page = false;
  public role: any;
  public roleId: any;
  public keywords: any;
  public noData = false;
  cssClass: string;
  public primaryColor: any;
  constructor(public navCtrl: NavController, public apiService: ApiService,
    public popoverCtrl: PopoverController, public popoverController: PopoverController,
    public referenceservice: UtilService, public modalController: ModalController,
    private http: HTTP, public events: Events, public dataService: JsonService) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.primaryColor = localStorage.getItem('primary_color');
    this.keywords = JSON.parse(localStorage.getItem('keywords'));
  }

  ionViewWillEnter() {
    this.clientList = JSON.parse(JSON.stringify(this.dataService.clientList));
  };

  ngOnInit() {
    this.applyClassBySelection('rollIn');
  }
  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }

  async addClient() {
    const modal = await this.modalController.create({
      component: AddClientPage,
      cssClass: 'custom-modal',
    });
    this.referenceservice.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.referenceservice.isModal = "";
    })
  }

  openClientProfile(client) {
    this.cssClass = '';
    this.navCtrl.navigateForward('/client-profile/1', { state: { 'client': client } });
  }

  async edit(project) {
    const modal = await this.modalController.create({
      component: EditClientPage,
      componentProps: { client: project },
      cssClass: 'custom-modal',
    });
    this.referenceservice.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.referenceservice.isModal = "";
    })
  }
  delete(i) {
    this.referenceservice.deleteAlert("Confirm Delete", "Do you want to delete this client").then(res => {
      this.onConfirmClicked(i);
    })
  }

  onConfirmClicked(id) {
    let element = document.getElementById(id);
    (id % 2) ? element.classList.add('animated', 'zoomOutRight') : element.classList.add('animated', 'zoomOutLeft')
    setTimeout(() => {
      this.clientList.splice(id, 1);
      this.referenceservice.showAlert('Success', 'Client Removed successfully');
    }, 1000);
  }
}
