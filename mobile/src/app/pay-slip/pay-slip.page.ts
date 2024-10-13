import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-pay-slip',
  templateUrl: './pay-slip.page.html',
  styleUrls: ['./pay-slip.page.scss'],
})
export class PaySlipPage implements OnInit {

  constructor(public util: UtilService) { }

  ngOnInit() {
  }

}
