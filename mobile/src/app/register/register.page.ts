import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  blackLogo: any;
  constructor(public navContrl: NavController, public navCtrl: NavController, public referenceservice: UtilService) {
    this.blackLogo = "assets/imgs/Logo-new.png";
  }

  ngOnInit() {
  }
  register() {
    this.referenceservice.showAlert('Smart HR', 'Account Successfully Registered!');
    this.navCtrl.pop();
  }
  loginPage() {
    this.navContrl.navigateRoot("/login");
  }
}
