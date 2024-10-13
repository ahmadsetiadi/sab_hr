import { Component, OnInit } from '@angular/core';
import { PopoverController, Events, NavController } from '@ionic/angular';
import { HomePopOverComponent } from '../home-pop-over/home-pop-over.component';
import { faCubes, faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons';
import { UtilService } from '../util.service';
import { ApiService } from '../api.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  faCubes = faCubes;
  faUsd = faDollarSign;
  faUser = faUser;
  public color: any;
  public roleId: any;
  public role: any;
  public url;
  public keywords: any = {};
  public token;
  public resp;
  count: any = {};
  one = 30;
  public loading;
  public call = false;
  cssClass: string;
  primaryColor: any;
  secondryColor: any;
  fullWhiteLogo: any;
  myApp: any;
  public currentEvents: any;
  public colorCode: any;
  constructor(public popoverController: PopoverController, public events: Events,
    public navController: NavController, public referenceservice: UtilService,
    public apiservice: ApiService, public statusBar: StatusBar) {
    events.subscribe('homeOptions', (btn) => {
      this.onPopOverDismiss(btn);
    });
    this.roleId = localStorage.getItem("role_id");
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#0A15D5');
  }

  ngOnInit() {
   
  }
  ionViewDidEnter() {
    this.applyClassBySelection("zoomIn");
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#0A15D5');
  }
  async showModal(ev: any) {
    const popover = await this.popoverController.create({
      component: HomePopOverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        "type": "homeOptions"
      }
    });
    console.log(ev);
    // popover.style.cssText = 'background:#fff;';
    return await popover.present();
  }
  getHeaderStyle() {
    return { background: this.primaryColor };
  }

  onPopOverDismiss(btn) {
    if (btn === "settings") {
      this.navController.navigateForward('/settings', { state: { pageType: "push" } });
    }
    else if (btn === "profile") {
      this.navController.navigateForward('/profile/12');
    }
    else if (btn === "logout") {
      this.logout();
    }
  }
  openInvoices() {
    this.navController.navigateForward("/invoices");
  }
  openEstimates() {
    this.navController.navigateForward("/estimates");
  }

  openClient() {
    this.navController.navigateForward("/clients");

  }
  openEmployee() {
    this.navController.navigateForward("/employee-list");
  }

  openTask() {
    this.navController.navigateForward("/task");
  }

  openPayroll() {
    this.navController.navigateForward("/employee-salary");
  }
  openAttedance() {
    this.navController.navigateForward("/attendance");
  }

  getstyle() {
    return {
      background:
        "linear-gradient(" + this.primaryColor + "," + this.secondryColor + ")"
    };
  }

  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }

  getFontstyle() {
    return { color: this.secondryColor };
  }

  getProgresstyle() {
    return {
      background:
        "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")"
    };
  }

  logout() {
    this.referenceservice.logout("Confirm", "Are you sure want to logout?", this.color);
  }

  openProject() {
    this.navController.navigateForward("/project-list");
  }
}
