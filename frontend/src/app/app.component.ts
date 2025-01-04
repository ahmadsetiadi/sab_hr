/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component } from '@angular/core';
import { UtilService } from './services/util.service';
import { NavigationExtras } from '@angular/router';
import { ConfigService } from './services/config.service';
import { DataService } from './services/datastorage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isMenuVisible: boolean = false;

  constructor(
    public util: UtilService,
    public config: ConfigService,
    public data: DataService,
  ) { 
    // this.data.loadconfig();
  }

  async ngOnInit() {
    await this.config.loadConfig();
    this.isMenuVisible = this.data.checkAuthentication();
    // const res = await this.data.logicsuccess(); console.log(res);
    // if (res==true) {
    //   console.log("a1");
    //   this.util.navigateRoot('/tabs');
    // } else {
    //   console.log("a2");
    //   this.util.navigateRoot('');
    // }
  }

  async onLogout() {
    localStorage.clear();
    this.util.navigateRoot("");
  }

  onPage(name: any) {
    this.util.navigateRoot(name);
  }

  onProductList(name: any, image: any) {
    const param: NavigationExtras = {
      queryParams: {
        name: name,
        image: image,
      }
    };
    this.util.navigateToPage('products-by-category', param);
  }

  onTopProduct(name: any) {
    const param: NavigationExtras = {
      queryParams: {
        name: name,
      }
    };
    this.util.navigateToPage('product-list', param);
  }
}
