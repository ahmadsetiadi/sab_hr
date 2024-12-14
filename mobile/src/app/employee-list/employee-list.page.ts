import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
// import { ApiService } from '../api.service';
import { NavController, PopoverController, Events, ModalController } from '@ionic/angular';
import { faEllipsisV, faUser } from '@fortawesome/free-solid-svg-icons';
import { JsonService } from '../json.service';
import { EditEmployeePage } from '../edit-employee/edit-employee.page';
import { AddEmployeePage } from '../add-employee/add-employee.page';
import { ApiService } from './../api2.service';
// import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
})
export class EmployeeListPage implements OnInit {
  faEllipsis = faEllipsisV;
  faUser = faUser;
  bgColor = '3A57C4';
  token: any;
  url: any;
  loading: any;
  employeeList: any = [
    {
      name: "",
      position: {
        "name": ""
      }
    }
  ];
  pageNumber = 1;
  resp: any;
  page = false;
  public role: any;
  public roleId: any;
  public noData = false;
  public filterData: any = {};
  cssClass: string;
  public primaryColor: any;
  public keywords: any = {};
  constructor(public referenceservice: UtilService, public apiService: ApiService, public dataService: JsonService,
    public navCtrl: NavController, public popoverCtrl: PopoverController, public events: Events,
    public modalController: ModalController,
    private api: ApiService,
    // private geo: Geolocation
  ) {

  }

  async ngOnInit() {
    // console.log(this.employeeList);
    // console.log("oninit");
    
    this.applyClassBySelection('rollIn');
  };

  // onError(error) {
  //   alert('code: '    + error.code    + '\n' +
  //         'message: ' + error.message + '\n');
  // }

  // onSuccess(position) {
  //   console.log(position);
  //   alert('Latitude: '          + position.coords.latitude          + '\n' +
  //     'Longitude: '         + position.coords.longitude         + '\n' +
  //     'Altitude: '          + position.coords.altitude          + '\n' +
  //     'Accuracy: '          + position.coords.accuracy          + '\n' +
  //     'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
  //     'Heading: '           + position.coords.heading           + '\n' +
  //     'Speed: '             + position.coords.speed             + '\n' +
  //     'Timestamp: '         + position.timestamp                + '\n');
  // }

  async ionViewWillEnter() {
  //   var onSuccess = function(position) {
  //     alert('Latitude: '          + position.coords.latitude          + '\n' +
  //           'Longitude: '         + position.coords.longitude         + '\n' +
  //           'Altitude: '          + position.coords.altitude          + '\n' +
  //           'Accuracy: '          + position.coords.accuracy          + '\n' +
  //           'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
  //           'Heading: '           + position.coords.heading           + '\n' +
  //           'Speed: '             + position.coords.speed             + '\n' +
  //           'Timestamp: '         + position.timestamp                + '\n');
  // };

    console.log("onenter");
    const url = "employee";        
    const response: any = await this.api.getData<any>(url, {}); console.log(response);
    this.employeeList = response;
    // console.log("start geo");
    //const a: any = this.geo.getCurrentPosition()
    // navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
    // console.log("end  geo");
  }

  openEmployeeProfile() {
    this.navCtrl.navigateForward('/profile/' + '1');
  }
  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }
  delete(i) {
    this.referenceservice.deleteAlert("Confirm Delete", "Do you want to delete this employee",
    ).then(res => {
      console.log(res);
      this.onConfirmClicked(i)
    })
  }
  onConfirmClicked(id) {
    let element = document.getElementById(id);
    (id % 2) ? element.classList.add('animated', 'zoomOutRight') : element.classList.add('animated', 'zoomOutLeft')
    setTimeout(() => {
      this.employeeList.splice(id, 1);
      this.referenceservice.showAlert('Success', 'Employee Removed successfully');
    }, 1000);
  }

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };
  async edit(employee) {
    // navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);

    const modal = await this.modalController.create({
      component: EditEmployeePage,
      componentProps: { employee: employee },
      cssClass: 'custom-modal',
    });
    this.referenceservice.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.referenceservice.isModal = "";
    })
  }
  async addEmployee() {
    const modal = await this.modalController.create({
      component: AddEmployeePage,
      cssClass: 'custom-modal',
    });
    this.referenceservice.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.referenceservice.isModal = "";
    })
  }
}
