import { Component, OnInit } from '@angular/core';
import { faVideo, faMicrophone, faUserPlus, faComments, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
import { UtilService } from '../util.service';
@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.page.html',
  styleUrls: ['./video-call.page.scss'],
})
export class VideoCallPage implements OnInit {
  videoCamera = faVideo;
  userPlus = faUserPlus
  microphone = faMicrophone
  comments = faComments
  arrow = faArrowsAltV

  constructor(public util: UtilService) { }

  ngOnInit() {
  }

}
