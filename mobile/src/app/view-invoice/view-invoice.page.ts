import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.page.html',
  styleUrls: ['./view-invoice.page.scss'],
})
export class ViewInvoicePage implements OnInit {
  invoice: any;
  items = [];
  tax1 = 0;
  subtotal = 0;
  tax2 = 0;
  discount = 0;
  dueamnt = 0;
  statusLogo = { accepted: '', rejected: '', pending: '' }
  total = 0;
  currentStatusLogo
  constructor(public referenceService: UtilService) { }

  ngOnInit() {
    this.statusLogo.accepted = "./assets/imgs/Paid.png";
    this.statusLogo.rejected = "./assets/imgs/Unpaid.png";
    this.statusLogo.pending = "./assets/imgs/pending.png";
    this.referenceService.getParams('invoice').then(res => {
      this.invoice = res
      console.log(this.invoice);
      this.setLogo();
      this.items = this.invoice.items;
      this.tax1 = Math.ceil(this.subtotal * (parseInt(this.invoice.tax1) * 0.01));
      this.tax2 = Math.ceil(this.subtotal * (parseInt(this.invoice.tax2) * 0.01));
      this.discount = Math.ceil(this.subtotal * (parseInt(this.invoice.discount) * 0.01));
      this.dueamnt = this.invoice.total_cost - this.invoice.payment_made;
      this.total = this.subtotal + (parseInt(this.invoice.tax1) * 0.01) + (parseInt(this.invoice.tax1) * 0.01);
      if (this.dueamnt < 0) {
        this.dueamnt = 0;
      }
    })
  }
  setLogo() {
    if (this.invoice.status === 'Paid') {
      this.currentStatusLogo = this.statusLogo.accepted;
    }
    else if (this.invoice.status === 'Unpaid') {
      this.currentStatusLogo = this.statusLogo.rejected;
    }
    else {
      this.currentStatusLogo = this.statusLogo.pending;
    }
    console.log(this.currentStatusLogo);
  }
}

