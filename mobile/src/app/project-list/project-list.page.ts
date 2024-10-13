import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { faCalendar, faPaperclip, faComments, faFilter } from '@fortawesome/free-solid-svg-icons';
import { UtilService } from '../util.service';
import { ApiService } from '../api.service';
import { NavController, Events, ModalController } from '@ionic/angular';
import { EditProjectPage } from '../edit-project/edit-project.page';
import { CreateProjectPage } from '../create-project/create-project.page';
declare const $: any;
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.page.html',
  styleUrls: ['./project-list.page.scss'],
})
export class ProjectListPage implements OnInit {
  projectList: any;
  color: any;
  roleId: any;
  cssClass: string;
  primaryColor: any;
  secondryColor: any;
  role: any;
  noData: any = false;
  time = 0;
  faCalendar = faCalendar;
  faPaperclip = faPaperclip;
  faComments = faComments;
  faFilter = faFilter;
  bgColor = '3A57C4';
  token: any;
  url: any;
  loading: any;
  pageNumber = 1;
  resp: any;
  public opentasks;
  public completedtasks;
  page = false;
  public keywords: any = {};
  constructor(public dataService: JsonService, public util: UtilService,
    public apiService: ApiService, public referenceservice: UtilService,
    public navCtrl: NavController, public events: Events, public modalController: ModalController) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.color = localStorage.getItem('colorCode');
    this.primaryColor = localStorage.getItem('primary_color')
    this.secondryColor = localStorage.getItem('secondry_color')
  }

  async  editProject(project) {
    const modal = await this.modalController.create({
      component: EditProjectPage,
      componentProps: { project: project },
      cssClass: 'custom-modal',
    });
    this.util.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.util.isModal = "";
    })
  }
  ngOnInit() {
    this.page = false;
    console.log(this.dataService.project_list);
    this.projectList = JSON.stringify(this.dataService.project_list);
    this.projectList = JSON.parse(this.projectList)
    this.projectList.forEach((value, key) => {
      value.time = this.time;
      this.time = this.time + 0.2;
      this.projectList[key].opentasks = value.tasks_open.length;
      this.projectList[key].completedtasks = value.tasks_completed.length;
    });
    this.applyClassBySelection('bounceInRight');
  }
  getHeaderStyle() {
    return { background: this.primaryColor };
  }

  openProject(project) {
    this.cssClass = '';
    this.navCtrl.navigateForward('/view-projects', { state: { 'project': project } });
  };

  async  createProject() {
    const modal = await this.modalController.create({
      component: CreateProjectPage,
      cssClass: 'custom-modal',
    });
    this.util.isModal = "blurPage";
    await modal.present();
    await modal.onWillDismiss().then(data => {
      console.log(data);
      this.util.isModal = "";
    })
  }

  getFontstyle() {
    return { color: this.secondryColor };
  }

  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }

  deleteProject(project) {
    this.cssClass = '';
    this.referenceservice.deleteAlert("Confirm Delete", "Do you want to delete this project",
    ).then(res => {
      console.log(res);
      this.onDeleteConfirm(project)
    })
  }

  onDeleteConfirm(project) {
    let element = document.getElementById(project);
    element.classList.add('animated', 'rollOut', 'slow');
    element.addEventListener('animationend', (e => {
      this.projectList.splice(project, 1);
      this.util.showAlert('Smart HR', 'Project Removed successfully');
    }))
  }

  getProgresstyle() {
    return {
      background:
        "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")",
      height: '10px'
    };
  }
}
