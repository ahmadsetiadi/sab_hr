import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController, NavParams } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.page.html',
  styleUrls: ['./edit-invoice.page.scss'],
})
export class EditInvoicePage implements OnInit {
  @Input() invoice: any;
  constructor(public activeRoute: ActivatedRoute, public navContrl: NavController, public util: UtilService,
    public alertController: AlertController) { }

  ngOnInit() {

  }
  update() {
    this.util.showAlert('Smart HR', 'Invoice Updated successfully');
    this.util.dismissModal();
  }
}
