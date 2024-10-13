import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.page.html',
  styleUrls: ['./view-expense.page.scss'],
})
export class ViewExpensePage implements OnInit {

  constructor(public util: UtilService, public navContrl: NavController) { }
  paymentInfo: any;

  ngOnInit() {
    this.util.getParams('expense').then(res => {
      this.paymentInfo = res;
    })
  }
  popBack() {
    console.log('dsfsdfds');
    this.navContrl.pop();
  }

}
