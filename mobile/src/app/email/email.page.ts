import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {
  faCircle = faCircle;
  constructor(public util: UtilService,public navContrl:NavController) { }

  ngOnInit() {
  }
  mailList(){
    this.navContrl.navigateForward("/mail-list");
  }
  composeMail(){
    this.navContrl.navigateForward("/compose-mail");
  }
}
