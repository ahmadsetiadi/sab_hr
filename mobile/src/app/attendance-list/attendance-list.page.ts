import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilService } from '../util.service';
import { NavController, PopoverController, Events } from '@ionic/angular';
import { HomePopOverComponent } from '../home-pop-over/home-pop-over.component';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.page.html',
  styleUrls: ['./attendance-list.page.scss'],
})
export class AttendanceListPage implements OnInit, OnDestroy {
  viewTitle;

  isToday: boolean;
  calendar = {
    mode: 'week',
    currentDate: new Date(),
    dateFormatter: {
      formatMonthViewDay: function (date: Date) {
        return date.getDate().toString();
      },
      formatMonthViewDayHeader: function (date: Date) {
        return 'MonMH';
      },
      formatMonthViewTitle: function (date: Date) {
        return 'testMT';
      },
      formatWeekViewDayHeader: function (date: Date) {
        return 'MonWH';
      },
      formatWeekViewTitle: function (date: Date) {
        return 'testWT';
      },
      formatWeekViewHourColumn: function (date: Date) {
        return 'testWH';
      },
      formatDayViewHourColumn: function (date: Date) {
        return 'testDH';
      },
      formatDayViewTitle: function (date: Date) {
        return 'testDT';
      }
    }
  };
  constructor(public util: UtilService,
    public navCtrl: NavController, public events: Events,
    public popoverController: PopoverController) {
  }

  ngOnInit() {
    this.events.subscribe('calendarModal1', (btn) => {
      this.onPopOverDismiss(btn);
    });
  }
  viewLog() {
    this.navCtrl.navigateForward('/attendance-log');
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }

  async showModal(ev: any) {
    const popover = await this.popoverController.create({
      component: HomePopOverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        "type": "calendarModal1"
      }
    });
    // popover.style.cssText = '--max-width: 125px; margin:-12px 0px 0px -17px;';
    return await popover.present();
  }
  onPopOverDismiss(date: any) {
    console.log(date, "1");
    this.calendar.currentDate = new Date(date.data)
  }
  ngOnDestroy() {
    this.events.unsubscribe('calendarModal1');
  }
}
