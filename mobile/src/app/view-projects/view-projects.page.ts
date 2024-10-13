import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { CalendarModalOptions } from 'ion2-calendar';
import { AddTaskPage } from '../add-task/add-task.page';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.page.html',
  styleUrls: ['./view-projects.page.scss'],
})
export class ViewProjectsPage implements OnInit {
  bgColor = '3A57C4';
  token: any;
  url: any;
  loading: any;
  employeeList: any;
  pageNumber = 1;
  resp: any;
  color: any;
  page = false;
  public pro: any;
  public opentasks;
  public completedtasks;
  project = 'overview';
  public currentEvents: any;
  public role: any;
  public task = false;
  public roleId: any;
  public noData = false;
  public primaryColor: any;
  public keywords: any = {};
  secondryColor: any;
  events = [];
  tooltip: any;
  taskEvent: any = {};
  type: 'string';
  dateRange: {
    from: Date;
    to: Date
  } = {
      from: new Date('2019-01-02'),
      to: new Date('2019-01-10')
    };

  option: CalendarModalOptions = {
    pickMode: 'range',
    title: 'RANGE',
    defaultDateRange: this.dateRange,
    defaultScrollTo: new Date('2019-01-02'),
    from: new Date('2019-01-02')
  };
  constructor(public router: Router, public navCtrl: NavController, public modalController: ModalController,
    public referenceservice: UtilService, public activeRoute: ActivatedRoute) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.color = localStorage.getItem('primary_color');
    this.primaryColor = localStorage.getItem('primary_color')
    this.secondryColor = localStorage.getItem('secondry_color')
    this.referenceservice.getParams('project').then(res => {
      this.pro = res;
      console.log(this.pro)
      this.dateRange.from = new Date(this.pro.start_date);
      this.dateRange.to = new Date(this.pro.overviews.deadline);
      this.option.defaultDateRange = this.dateRange;
      this.option.defaultScrollTo = new Date(this.pro.start_date);
      this.opentasks = this.pro.tasks_open.length;
      this.completedtasks = this.pro.tasks_completed.length;
      if (this.pro.tasks.length == 0) {
        this.task = true;
      }
    });
    this.keywords = JSON.parse(localStorage.getItem('keywords'));
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // this.pro.overviews.project_team_members.forEach(element => {
    //   var img = this.pro.overviews.user_profile_path + element.avatar;
    //   element.avatar = img;
    // });
    this.pro.tasks.forEach(element => {
      var date = element.task_detail.due_date.split('-')
      var data: any = {};
      data.year = date[0];
      data.month = parseInt(date[1]) - 1;
      data.date = date[2];
      data.detail = element.task_detail;
      this.events.push(data);
    });
  }

  getProgresstyle() {
    return {
      background:
        "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")"
    };
  }
  getHeaderStyle() {
    return { background: this.primaryColor };
  }
  getFontstyle() {
    return { color: this.secondryColor };
  }


  setDefaultPic() {
    this.pro.overviews.project_lead_photo = "assets/imgs/user.jpg";
  };

  setDefaultUserPic(img) {
    img.avatar = "assets/imgs/user.jpg";
  };

  openTask(task) {
    let data = JSON.stringify({ task: task, project: this.pro })
    this.navCtrl.navigateForward('task-details/' + data);
  };
  async add() {
    const modal = await this.modalController.create({
      component: AddTaskPage,
      cssClass: 'custom-modal',
    });
    this.referenceservice.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.referenceservice.isModal = "";
    })
  }
  onDaySelect(event) {
    //console.log(event);
    var month = event.month + 1;
    var day = event.date;
    //console.log(day)
    if (day < 10) {
      //console.log(day)
      day = '0' + day;
    }
    var eventData: any = {};
    var date = event.year + '-' + month + '-' + day;
    this.pro.tasks.forEach(element => {
      if (element.task_detail.due_date == date) {
        eventData = element;
      }
    });
    //console.log(eventData)
    if (JSON.stringify(eventData) != '{}') {
      let data = JSON.stringify({ event: eventData })
      this.navCtrl.navigateForward('/Calendar-modal/' + data)
    }
    else {
      this.referenceservice.showAlert("SMART HRMS", 'No Events on this day');
    }
  }
  onMonthSelect(event) {
    //console.log(event)
  }


  createTask() {
    let data = JSON.stringify({
      project: this.pro.overviews.project_id,
      type: 'task'
    })
    this.navCtrl.navigateForward('/create-task/' + data);
  }
}
