import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from '../util.service';
import { NavController, ModalController } from '@ionic/angular';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { faCalendar, faPaperclip, faComments, faFilter } from '@fortawesome/free-solid-svg-icons';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { JsonService } from '../json.service';
import { EditClientPage } from '../edit-client/edit-client.page';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.page.html',
  styleUrls: ['./client-profile.page.scss'],
})
export class ClientProfilePage implements OnInit {
  profile = "overview";
  faCalendar = faCalendar;
  faPaperclip = faPaperclip;
  faComments = faComments;
  faFilter = faFilter;
  public loading;
  public url;
  public token;
  public resp;
  public clientProfileData: any = {};
  public role: any;
  public roleId: any;
  public imagePath;
  estimatesList: any;
  public profileImage;
  projectList: any = {};
  invoicesList: any;
  estimates = false;
  co_id: any;
  time = 0;
  public keywords: any = {};
  client: any;
  public primaryColor: any;
  public secondryColor: any;
  constructor(public referenceService: UtilService, public activeRoute: ActivatedRoute,
    public apiService: ApiService, public navCtrl: NavController, public dataService: JsonService,
    public actionSheet: ActionSheet, public modalController: ModalController,
    public camera: Camera, private transfer: FileTransfer, public router: Router) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.co_id = this.activeRoute.snapshot.paramMap.get('clientId');
    this.primaryColor = localStorage.getItem('primary_color');
    this.secondryColor = localStorage.getItem('secondry_color');
    this.keywords = JSON.parse(localStorage.getItem('keywords'));
  }

  ngOnInit() {
    this.clientProfileData = this.dataService.clientProfile;
    this.invoicesList = this.clientProfileData.invoices;
    this.estimatesList = this.clientProfileData.estimates;
    this.projectList = JSON.stringify(this.dataService.project_list);
    this.projectList = JSON.parse(this.projectList)
    this.projectList.forEach((value, key) => {
      value.time = this.time;
      this.time = this.time + 0.2;
      this.projectList[key].opentasks = value.tasks_open.length;
      this.projectList[key].completedtasks = value.tasks_completed.length;
    });
  }

  getProgresstyle() {
    return {
      background:
        "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")",
      height: '10px'
    };
  }
  getFontstyle() {
    return { color: this.secondryColor };
  }
  editProfile() {
    this.navCtrl.navigateForward('/edit-profile/', { state: this.clientProfileData });
  };

  openInvoice(invoice) {
    this.navCtrl.navigateForward('/view-invoice', { state: { 'invoice': invoice } });
  };

  openProject(project) {
    this.navCtrl.navigateForward('/view-projects', { state: { 'project': project } });
  }
  openView() {
    this.navCtrl.navigateForward('/view-estimates');
  }

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  openEstimate(estimate) {
    this.navCtrl.navigateForward('/view-estimates', { state: { 'estimate': estimate } });
  }

  getstyle() {
    return { 'background': "linear-gradient(" + this.primaryColor + "," + this.secondryColor + ")" }
  }
  setDefaultPic() {
    this.profileImage = "assets/imgs/user.jpg";
  }
  async edit() {
    const modal = await this.modalController.create({
      component: EditClientPage,
      componentProps: { client: this.clientProfileData },
      cssClass: 'custom-modal',
    });
    this.referenceService.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.referenceService.isModal = "";
    })
  }
}
