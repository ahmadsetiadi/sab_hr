import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UtilService } from '../util.service';
import { NavController, NavParams } from '@ionic/angular';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-view-estimates',
  templateUrl: './view-estimates.page.html',
  styleUrls: ['./view-estimates.page.scss'],
})
export class ViewEstimatesPage implements OnInit {
  estimate
  items
  tax1 = 0
  tax2 = 0
  subtotal = 0
  total = 0
  currentStatusLogo
  statusLogo = { accepted: '', rejected: '', pending: '' }
  constructor(public apiService: ApiService, public dataService: JsonService,
    public referenceService: UtilService, public navContrl: NavController) {
  }

  ngOnInit() {
    this.statusLogo.accepted = "./assets/imgs/approved.png";
    this.statusLogo.rejected = "./assets/imgs/rejected.png";
    this.statusLogo.pending = "./assets/imgs/pending.png";

    this.estimate = this.dataService.estimateList[0];
    this.setLogo();
    this.items = this.estimate.items;
    this.tax1 = Math.ceil(this.subtotal * (parseInt(this.estimate.tax1) * 0.01));
    this.tax2 = Math.ceil(this.subtotal * (parseInt(this.estimate.tax2) * 0.01));
    this.total = this.subtotal + this.tax1 + this.tax2;
  }
  setLogo() {
    if (this.estimate.status === 'Accepted') {
      this.currentStatusLogo = this.statusLogo.accepted;
    }
    else if (this.estimate.status === 'Declined') {
      this.currentStatusLogo = this.statusLogo.rejected;
    }
    else {
      this.estimate = this.statusLogo.pending;
    }
    console.log(this.currentStatusLogo);
  }
}
