import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  chats = [];
  constructor(public util: UtilService, public navContrl: NavController) {
    this.chats = [{ contactName: "Smith", time: "12:00 AM", lastMsg: "Haii" },
    { contactName: "Steve Smith", time: "12:03 AM", lastMsg: "Hey" },
    { contactName: "John Doe", time: "1:45 PM", lastMsg: "Are you there?" },
    { contactName: "John Smith", time: "9:00 AM", lastMsg: "Hello" }]
  }

  ngOnInit() {
  }
  viewChat() {
    this.navContrl.navigateForward("/view-chat");
  }
  newChat() {
    this.navContrl.navigateForward("/contacts");
  }
}
