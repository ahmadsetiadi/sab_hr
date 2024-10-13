import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  payments = [];
  constructor(public navContrl: NavController, public util: UtilService) {
    this.payments = [{ invoiceId: "INV0003", amount: "1.02", company: "johnson Enterprises", mode: "online", date: "18 Jun 2018", transactionId: "72414", currency: "USD" },
    { invoiceId: "INV0004", amount: "11125.02", company: "Dream Guys", mode: "online", date: "17 Nov 2018", transactionId: "792145", currency: "USD" },
    { invoiceId: "INV0013", amount: "68992.52", company: "Infotech", mode: "online", date: "18 Dec 2019", transactionId: "797925", currency: "USD" },
    { invoiceId: "INV0012", amount: "25438.79", company: "AscesTech", mode: "online", date: "14 Jan 2018", transactionId: "792145", currency: "USD" },
    { invoiceId: "INV0043", amount: "45681.55", company: "Infotech Enterprises", mode: "online", date: "18 Feb 2019", transactionId: "2142145", currency: "USD" },
    { invoiceId: "INV0055", amount: "15864.66", company: "Dream Guys", mode: "Bank Deposite", date: "08 Mar 2018", transactionId: "7922145", currency: "USD" },
    { invoiceId: "INV0068", amount: "95431.52", company: "AscesTech ", mode: "online", date: "28 Apr 2018", transactionId: "214145", currency: "USD" }]
  }

  ngOnInit() {
  }
  details(paymentDetails) {
    this.navContrl.navigateForward("/payment-details/1", { state: { 'payment': paymentDetails } });
  }
}
