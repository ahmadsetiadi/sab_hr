import { Component, OnInit, Optional } from '@angular/core';
import { PopoverController, Events, NavParams } from '@ionic/angular';
import { UtilService } from '../util.service';
import { CalendarModalOptions } from 'ion2-calendar';

@Component({
  selector: 'app-home-pop-over',
  templateUrl: './home-pop-over.component.html',
  styleUrls: ['./home-pop-over.component.scss'],
})
export class HomePopOverComponent implements OnInit {
  profileOptions = false;
  homeOptions = false;
  calendarModal = false;
  data: any;
  date: any;
  type: 'string';

  option: CalendarModalOptions = {
    pickMode: 'single',
    title: 'RANGE',
    defaultScrollTo: new Date(),
    from: new Date('2010-01-02')
  };
  constructor(public popoverCtrl: PopoverController,
    public events: Events, public navParam: NavParams) { }

  ngOnInit() {
    if (this.navParam.data.type === 'clientOptions') {
      this.profileOptions = true;
      this.data = this.navParam.data.client;
    }
    else if (this.navParam.data.type === 'homeOptions') {
      this.homeOptions = true;
    }
    else if (this.navParam.data.type === 'employeeOptions') {
      this.profileOptions = true;
      this.data = this.navParam.data.employee;
      console.log(this.navParam.data);
    }
    else if ((this.navParam.data.type === 'calendarModal') || (this.navParam.data.type === 'calendarModal1')) {
      this.calendarModal = true;
    }
  }
  homeAction(action) {
    this.onDismiss(action);
  }
  profileAction(action) {
    this.onDismiss({ 'action': action, data: this.data });
  }
  submitDate() {
    this.onDismiss({ data: this.date });
  }
  async onDismiss(data) {
    try {
      await this.popoverCtrl.dismiss(data);
      this.events.publish(this.navParam.data.type, data);
    } catch (e) {
      //click more than one time popover throws error, so ignore...
    }

  }
}
