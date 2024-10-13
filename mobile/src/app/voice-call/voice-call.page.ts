import { Component, OnInit } from '@angular/core';
import { faVideo, faMicrophone, faUserPlus, faComments } from '@fortawesome/free-solid-svg-icons';
import { UtilService } from '../util.service';
@Component({
  selector: 'app-voice-call',
  templateUrl: './voice-call.page.html',
  styleUrls: ['./voice-call.page.scss'],
})
export class VoiceCallPage implements OnInit {
  videoCamera = faVideo;
  userPlus = faUserPlus
  microphone = faMicrophone
  comments = faComments

  constructor(public util: UtilService) { }

  ngOnInit() {
  }

}
