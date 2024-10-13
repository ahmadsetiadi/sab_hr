import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilService } from '../util.service';
import { Events, PopoverController } from '@ionic/angular';
import { HomePopOverComponent } from '../home-pop-over/home-pop-over.component';

@Component({
  selector: 'app-attendance-log',
  templateUrl: './attendance-log.page.html',
  styleUrls: ['./attendance-log.page.scss'],
})
export class AttendanceLogPage implements OnInit, OnDestroy {
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
  constructor(public util: UtilService, public events: Events,
    public popoverController: PopoverController) {
  }

  ngOnInit() {
    this.events.subscribe('calendarModal', (btn) => {
      this.onPopOverDismiss(btn);
    });
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
        "type": "calendarModal"
      }
    });
    // popover.style.cssText = '--max-width: 125px; margin:-12px 0px 0px -17px;';
    return await popover.present();
  }
  onPopOverDismiss(date: any) {
    this.calendar.currentDate = new Date(date.data)
  }
  ngOnDestroy() {
    this.events.unsubscribe('calendarModal');
  }
}
