import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { UtilService } from '../util.service';
import { ModalController } from '@ionic/angular';
import { AddTaskPage } from '../add-task/add-task.page';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  tasks
  opentasks
  completedtasks
  taskCategory = 'all'
  constructor(public dataService: JsonService, public referenceservice: UtilService, public modalController: ModalController) { }

  ngOnInit() {
    this.tasks = this.dataService.project_list[0].tasks;
    this.opentasks = this.dataService.project_list[0].tasks_open.length;
    this.completedtasks = this.dataService.project_list[0].tasks_completed.length;
  }
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
}
