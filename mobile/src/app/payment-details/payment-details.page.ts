import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.page.html',
  styleUrls: ['./payment-details.page.scss'],
})
export class PaymentDetailsPage implements OnInit {
  paymentInfo: any;
  constructor(public activeRoute: ActivatedRoute, public navContrl: NavController, public util: UtilService) { }

  ngOnInit() {
    this.util.getParams('payment').then(res => {
      this.paymentInfo = res;
    })
  }
}
