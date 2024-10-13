import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { ActionSheetOptions, ActionSheet } from '@ionic-native/action-sheet/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransferObject, FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { EditEmployeePage } from '../edit-employee/edit-employee.page';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile = "personal";
  public loading;
  public url;
  public token;
  public resp;
  public profileData: any = {};
  public role: any;
  public roleId: any;
  public educationDetails: any;
  public exprienceInfo: any;
  public imagePath;
  public profileImage;
  public keywords: any = {};
  noEducation = false;
  noExperience = false;
  isprofile = false;
  user_id: any;
  primaryColor: any;
  secondryColor: any;
  public colorCode: any;
  showPage = false;
  id: any;
  constructor(public referenceService: UtilService, public navCtrl: NavController,
    public activeRoute: ActivatedRoute, public apiService: ApiService,
    public camera: Camera, public actionSheet: ActionSheet, public modalController: ModalController,
    public transfer: FileTransfer, public dataService: JsonService) {
    // this.role = localStorage.getItem('role');
    // this.roleId = localStorage.getItem('role_id');
    this.keywords = JSON.parse(localStorage.getItem('keywords'));
    // if (this.activeRoute.snapshot.paramMap.get('empId')) {
    //   this.id = this.activeRoute.snapshot.paramMap.get('empId');
    // }
    // else {
    //   this.id = localStorage.getItem('user_id');
    // }
    // this.colorCode = {
    //   'background-color': localStorage.getItem('colorCode'),
    // }
    // this.primaryColor = localStorage.getItem("primary_color");
    // this.secondryColor = localStorage.getItem("secondry_color");
    // if (this.id) {
    //   this.user_id = this.id
    // }
    // else {
    //   this.user_id = "";
    // }
    // this.loading = this.referenceService.loading();
    // //  this.loading.present();
    // //console.log(this.resp)
    // var data = { user_id: this.user_id };
    // this.url = this.apiService.profile();
    // this.token = localStorage.getItem('token')
    // //console.log(this.token);
    // var token = { 'token': this.token };
    // this.referenceService.postService(this.url, data, token)
    //   .then((data: any) => {
    //     this.showPage = true
    //     this.resp = JSON.parse(data.data);
    //     console.log(this.resp)
    //     if (this.resp.message == "Invalid token or Token missing") {
    //       this.referenceService.showAlert("Session Expired", 'Oops!! your session is expired please login and try again');
    //       // this.navCtrl.popAll();
    //       //  this.loading.dismiss();
    //       localStorage.clear();
    //       this.navCtrl.navigateRoot('/login');
    //     }
    //     if (this.resp.message == "Success") {
    //       this.profileData = this.resp.data;
    //       if (this.profileData.employee_details.address == 'null') {
    //         this.profileData.employee_details.address = '';
    //       }
    //       if (this.profileData.employee_details.city == 'null') {
    //         this.profileData.employee_details.city = '';
    //       }
    //       if (this.profileData.employee_details.country == 'null') {
    //         this.profileData.employee_details.country = '';
    //       }
    //       this.profileImage = this.profileData.avatar;
    //       this.educationDetails = this.profileData.education_details;
    //       if (this.educationDetails.length == 0) {
    //         this.noEducation = true;
    //       }
    //       this.exprienceInfo = this.profileData.experience_details;
    //       if (this.exprienceInfo.length == 0) {
    //         this.noExperience = true;
    //       }
    //       //console.log(this.profileData.employee_details)
    //       //console.log(this.profileData.employee_details.city)
    //       //console.log(this.profileData.employee_details.address)
    //       this.isprofile = true;
    //       //console.log(this.profileData);
    //       //  this.loading.dismiss();
    //     }
    //   })
    //   .catch(error => {
    //     //console.log(error);
    //     //  this.loading.dismiss();
    //     this.referenceService.showAlert("SMART HRMS", 'Unable to reach server at the moment');
    // });
  }

  ngOnInit() {
    // var data = { user_id: this.user_id };
    // this.url = this.apiService.profile();
    // this.token = localStorage.getItem('token')
    // //console.log(this.token);
    // var token = { 'token': this.token };
    // this.referenceService.postService(this.url, data, token)
    //   .then((data: any) => {
    //     this.resp = JSON.parse(data.data);
    //     //console.log(this.resp)
    //     if (this.resp.message == "Invalid token or Token missing") {
    //       this.referenceService.showAlert("Session Expired", 'Oops!! your session is expired please login and try again');
    //       // this.navCtrl.popAll();
    //       //  this.loading.dismiss();
    //       localStorage.clear();
    //       this.navCtrl.navigateRoot('/login');
    //     }
    //     if (this.resp.message == "Success") {
    //       this.profileData = this.resp.data;
    //       if (this.profileData.employee_details.address == 'null') {
    //         this.profileData.employee_details.address = '';
    //       }
    //       if (this.profileData.employee_details.city == 'null') {
    //         this.profileData.employee_details.city = '';
    //       }
    //       if (this.profileData.employee_details.country == 'null') {
    //         this.profileData.employee_details.country = '';
    //       }
    //       this.profileImage = this.profileData.avatar;
    //       this.educationDetails = this.profileData.education_details;
    //       if (this.educationDetails.length == 0) {
    //         this.noEducation = true;
    //       }
    //       this.exprienceInfo = this.profileData.experience_details;
    //       if (this.exprienceInfo.length == 0) {
    //         this.noExperience = true;
    //       }
    //       //console.log(this.profileData.employee_details)
    //       //console.log(this.profileData.employee_details.city)
    //       //console.log(this.profileData.employee_details.address)
    //       this.isprofile = true;
    //       //console.log(this.profileData);
    //       //  this.loading.dismiss();
    //     }
    //   })
    //   .catch(error => {
    //     //console.log(error);
    //     //  this.loading.dismiss();
    //     this.referenceService.showAlert("SMART HRMS", 'Unable to reach server at the moment');
    //   });
  }

  editBasic() {
    // let modal = this.modalCtrl.create(BasicInfoPage, {
    //   user: this.profileData.employee_details
    // });
    // modal.onDidDismiss((data) => {
    //   if (data != undefined) {
    //     if (data == "close") {
    //       this.ionViewWillEnter();
    //       this.content.scrollToTop();
    //     }
    //     else {
    //     }
    //   }
    // });
    // modal.present();
    // //console.log("modal")
  };
  async edit() {
    const modal = await this.modalController.create({
      component: EditEmployeePage,
      componentProps: { employee: this.dataService.employeeProfile },
      cssClass: 'custom-modal',
    });
    this.referenceService.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.referenceService.isModal = "";
    })
  }
  ionViewWillEnter1() {
    var data = { user_id: this.user_id };
    this.url = this.apiService.profile();
    this.token = localStorage.getItem('token')
    //console.log(this.token);
    var token = { 'token': this.token };
    this.referenceService.postService(this.url, data, token)
      .then((data: any) => {
        this.resp = JSON.parse(data.data);
        //console.log(this.resp)
        if (this.resp.message == "Invalid token or Token missing") {
          this.referenceService.showAlert("Session Expired", 'Oops!! your session is expired please login and try again');
          // this.navCtrl.popAll();
          //  this.loading.dismiss();
          localStorage.clear();
          this.navCtrl.navigateRoot('/login');
        }
        if (this.resp.message == "Success") {
          this.profileData = this.resp.data;
          if (this.profileData.employee_details.address == 'null') {
            this.profileData.employee_details.address = '';
          }
          if (this.profileData.employee_details.city == 'null') {
            this.profileData.employee_details.city = '';
          }
          if (this.profileData.employee_details.country == 'null') {
            this.profileData.employee_details.country = '';
          }
          this.profileImage = this.profileData.avatar;
          this.educationDetails = this.profileData.education_details;
          if (this.educationDetails.length == 0) {
            this.noEducation = true;
          }
          this.exprienceInfo = this.profileData.experience_details;
          if (this.exprienceInfo.length == 0) {
            this.noExperience = true;
          }
          //console.log(this.profileData.employee_details)
          //console.log(this.profileData.employee_details.city)
          //console.log(this.profileData.employee_details.address)
          this.isprofile = true;
          //console.log(this.profileData);
          //  this.loading.dismiss();
        }
      })
      .catch(error => {
        //console.log(error);
        //  this.loading.dismiss();
        this.referenceService.showAlert("SMART HRMS", 'Unable to reach server at the moment');
      });
  }

  editpersonal() {
    // let modal = this.modalCtrl.create(PersonalInfoPage, {
    //   user_personal: this.profileData.personal_info,
    //   user_id: this.profileData.employee_details.user_id
    // });
    // modal.onDidDismiss((data) => {
    //   if (data != undefined) {
    //     if (data == "close") {
    //       this.ionViewWillEnter();
    //       this.content.scrollToTop();
    //     }
    //     else {
    //     }
    //   }
    // });
    // modal.present();
    // //console.log("modal")
  };
  editEmergency() {
    // let modal = this.modalCtrl.create(PersonalInfoPage, {
    //   user: this.profileData.emergency_info,
    //   user_id: this.profileData.employee_details.user_id
    // });
    // modal.onDidDismiss((data) => {
    //   if (data != undefined) {
    //     if (data == "close") {
    //       this.ionViewWillEnter();
    //       this.content.scrollToTop();
    //     }
    //     else {
    //     }
    //   }
    // });
    // modal.present();
    // //console.log("modal")
  };

  editBankInfo() {
    // let modal = this.modalCtrl.create(BankInfoPage, {
    //   user: this.profileData.personal_info,
    //   user_id: this.profileData.employee_details.user_id
    // });
    // modal.onDidDismiss((data) => {
    //   if (data != undefined) {
    //     if (data == "close") {
    //       this.ionViewWillEnter();
    //       this.content.scrollToTop();
    //     }
    //     else {
    //     }
    //   }
    // });
    // modal.present();
    // //console.log("modal")
  };

  getstyle() {
    return {
      background:
        "linear-gradient(" + this.primaryColor + "," + this.secondryColor + ")"
    };
  }
  getProgresstyle() {
    return {
      background:
        "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")"
    };
  }
  getHeaderStyle() {
    return { background: this.primaryColor };
  }


  editProfile() {
    this.navCtrl.navigateForward('/edit-profile', { state: { 'profile': this.profileData } });
  }

  getImage() {
    let buttonLabels = ['Using Camera', 'Open Library'];
    let options: ActionSheetOptions = {
      title: 'Upload image',
      subtitle: 'Choose an action',
      buttonLabels: buttonLabels,
      addCancelButtonWithLabel: 'Cancel',
      destructiveButtonLast: true
    };
    this.actionSheet.show(options).then((buttonIndex: number) => {
      //console.log('Button pressed: ' + buttonIndex);
      this.imageUpload(buttonIndex)
    });
  };

  imageUpload(type) {
    if (type == 1) {
      var options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.CAMERA
      }
    }
    if (type == 2) {
      var options: CameraOptions = {
        quality: 50,
        targetWidth: 600,
        targetHeight: 600,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      }
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      //console.log(imageData)
      this.imagePath = imageData;
      this.upload();
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      this.referenceService.showAlert("SMART HRMS", 'Selected image is not supported please choose JPEG or PNG image');
      // Handle error
    });
  };

  upload() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    this.token = localStorage.getItem('token')
    var token = { 'token': this.token };
    let options1: FileUploadOptions = {
      fileKey: 'file',
      fileName: '.jpg',
      httpMethod: 'post',
      mimeType: "image/jpg/png/jpeg",
      chunkedMode: false,
      headers: token
    }
    this.url = this.apiService.imageUpload();
    //console.log(options1)
    this.loading = this.referenceService.loading();
    //  this.loading.present();
    fileTransfer.upload(this.imagePath, this.url, options1)
      .then((data) => {
        var resp = JSON.parse(data.response)
        this.profileImage = resp.data;
        //  this.loading.dismiss();
        // success
      }, (err) => {
        //console.log(err)
        //  this.loading.dismiss();
        this.referenceService.showAlert("SMART HRMS", 'Unable to reach server at the moment');
        // error
      })
  };

  setDefaultPic() {
    this.profileImage = "assets/imgs/user.jpg";
  }
}
