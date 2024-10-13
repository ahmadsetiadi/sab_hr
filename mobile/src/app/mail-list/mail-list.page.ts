import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.page.html',
  styleUrls: ['./mail-list.page.scss'],
})
export class MailListPage implements OnInit {

  constructor(public util: UtilService, public navContrl: NavController) { }
  mailList = [{
    from: 'Github', initial: 'G', subject: 'Why do we use it?', time: '1:04 AM', stared: true,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros'
  },
  {
    from: 'Facebook', initial: 'F', subject: 'Why do we use it?', time: '1:04 AM', stared: false,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros'
  },
  {
    from: 'Jhon Deo', initial: 'J', subject: 'Why do we use it?', time: '1:04 AM', stared: true,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros'
  },
  {
    from: 'Arun', initial: 'A', subject: 'Why do we use it?', time: '1:04 AM', stared: false,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros'
  },
  {
    from: 'Bala', initial: 'B', subject: 'Why do we use it?', time: '1:04 AM', stared: true,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros'
  }]
  colors = {
    A: '#800080', B: '#008054', C: '#e74bec', D: '#4bd2ec',
    E: '#ec4b4b', F: '#4b87ec', G: '#800080', H: '#008054', I: '#e74bec', J: '#4bd2ec', K: '#ec4b4b',
    L: '#4b87ec', M: '#800080', N: '#008054', O: '#e74bec', P: '#4bd2ec',
    Q: '#ec4b4b', R: '#4b87ec', S: '#800080', T: '#008054', U: '#4682B4', V: '#7B68EE',
    W: '#D2691E', X: '#BC8F8F', Y: '#778899', Z: '#696969'
  }
  ngOnInit() {
  }
  viewMail() {
    this.navContrl.navigateForward("/view-mail");
  }
  composeMail() {
    this.navContrl.navigateForward("/compose-mail");
  }
  delete(i) {
    this.util.deleteAlert("Confirm Delete", "Do you want to delete this mail").then(res => {
      this.mailList.splice(i, 1);
      this.util.showAlert("Smart HR", "Mail Removed Successfully");
    })
  }
}
