import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-view-chat',
  templateUrl: './view-chat.page.html',
  styleUrls: ['./view-chat.page.scss'],
})
export class ViewChatPage implements OnInit {

  messages = [{ message: "Hai", messageType: "received" },
  { message: "How are you?", messageType: "received" },
  { message: "Hi there, I am also fine, thanks! And how are you?", messageType: "sent" },
  { message: "I am also fine", messageType: "received" },
  { message: "I am also fine", messageType: "received" },
  { message: "I am also fine", messageType: "received" },
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", messageType: "sent" },
  { message: "Good", messageType: "received" },
  { message: "What next?", messageType: "sent" },
  { message: "What next?", messageType: "sent" },
  { message: "What next?", messageType: "sent" },
  { message: "Nothing", messageType: "received" },
  { message: "Okay", messageType: "sent" },
  { message: "Bye!", messageType: "received" },
  { message: "Okay", messageType: "sent" }
  ]
  constructor(public util: UtilService) { }

  ngOnInit() {
  }
  getCss(index) {
    let type = this.messages[index].messageType
    if (index == this.messages.length - 1) {
      return 'message-' + this.messages[index].messageType + '-end'
    }
    else if (this.messages[index].messageType === type) {
      if (index == 0) {
        return 'message-' + type + '-start'
      }
      else {
        if (this.messages[index - 1].messageType === type && this.messages[index + 1].messageType === type) {
          return ''
        }
        else if (this.messages[index - 1].messageType === type && this.messages[index + 1].messageType != type) {
          return 'message-' + type + '-end'
        }
        else if ((this.messages[index - 1].messageType != type && this.messages[index + 1].messageType === type) ||
          (this.messages[index - 1].messageType != type && this.messages[index + 1].messageType != type)) {
          return 'message-' + type + '-start'
        }
      }
    }
  }
}
