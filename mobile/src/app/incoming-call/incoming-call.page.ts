import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-incoming-call',
  templateUrl: './incoming-call.page.html',
  styleUrls: ['./incoming-call.page.scss'],
})
export class IncomingCallPage implements OnInit {

  constructor(public navContrl: NavController, public util: UtilService) { }

  ngOnInit() {
  }
  answerCall() {
    this.navContrl.navigateForward("/video-call");
  }
}
