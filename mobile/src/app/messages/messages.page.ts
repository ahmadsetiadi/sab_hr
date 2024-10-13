import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  messages = [{ message: "Hai", messageType: "received" },
  { message: "How are you?", messageType: "received" },
  { message: "Hi there, I am also fine, thanks! And how are you?", messageType: "sent" },
  { message: "I am also fine", messageType: "received" },
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", messageType: "sent" },
  { message: "Good", messageType: "received" },
  { message: "What next?", messageType: "sent" },
  { message: "Nothing", messageType: "received" },
  { message: "Okay", messageType: "sent" },
  { message: "Bye!", messageType: "received" },
  { message: "Okay", messageType: "sent" }
  ]
  constructor(public util: UtilService) { }

  ngOnInit() {
  }

}
