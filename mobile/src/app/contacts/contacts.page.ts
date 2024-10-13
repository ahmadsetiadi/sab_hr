import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts = []
  groupName = "";
  form = [];
  contactsCopy = []
  searchStr = "";
  showSelectList: boolean = false;
  showsearchBar;
  constructor(public navContrl: NavController, public modalController: ModalController, public util: UtilService) {
    this.contacts = [
      { val: 'Barry Cuda', isChecked: false },
      { val: 'Catherine Manseau', isChecked: false },
      { val: 'Daniel Portar', isChecked: false },
      { val: 'John Doe', isChecked: false },
      { val: 'Loren Gatlin', isChecked: false },
      { val: 'Mike Litorus', isChecked: false },
      { val: 'Richard Miles', isChecked: false },
      { val: 'Steam smith', isChecked: false },
      { val: 'Wilmer Deluna', isChecked: false },
    ];
    this.contactsCopy = this.contacts;
  }

  ngOnInit() {

  }
  openChat() {
    this.navContrl.navigateForward("/view-chat");
  }
  async group() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    modal.onDidDismiss().then((detail) => {
      if (detail !== null && detail.data && detail.data.groupName) {
        console.log(detail);
        this.groupName = detail.data.groupName;
        this.showSelectList = true;
      }
    });
    await modal.present();
  }
  cancel() {
    this.showSelectList = false;
  }


  search() {
    if (this.searchStr.length == 0) {
      this.contacts = this.contactsCopy
    }
    else {
      this.contacts = this.contactsCopy.filter((contact) => contact.val.toLocaleUpperCase().includes(this.searchStr.toLocaleUpperCase()));
    }
  }
}
