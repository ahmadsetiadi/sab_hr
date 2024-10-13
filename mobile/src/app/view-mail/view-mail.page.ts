import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-mail',
  templateUrl: './view-mail.page.html',
  styleUrls: ['./view-mail.page.scss'],
})
export class ViewMailPage implements OnInit {
  mail: any;
  constructor(public util: UtilService, public navContrl: NavController) {
    this.mail = {
      from: 'Facebook', initial: 'F', subject: 'Why do we use it?', time: '1:04 AM', stared: false,
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros'
    }
  }

  ngOnInit() {
  }
  composeMail() {
    this.navContrl.navigateForward("/compose-mail");
  }
}
