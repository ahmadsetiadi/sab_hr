import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { UtilService } from './util.service';
import { ApiService } from './api.service';
import { JsonService } from './json.service';
// import { StorageService } from './storage.service';
// import { format } from 'date-fns';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  primaryColor: any;
  secondryColor: any;
  public keywords: any = {};
  public role;
  public roleId;
  subPage = {}
  public pages1 = [
    {
      title: 'Dashboard',
      url: '/home'
    }
  ];
  public employees = [
    {
      title: 'All Employees',
      url: '/employee-list'
    },
    {
      title: 'Holidays',
      url: '/holiday-list'
    },
    {
      title: 'Attendance',
      url: '/attendance'
    },
    {
      title: 'Attendance List',
      url: '/attendance-list'
    },
    {
      title: 'Attendance Details',
      url: '/attendance-log'
    },
    {
      title: 'Leave Requests',
      url: '/leave-type'
    },
    {
      title: 'Departments',
      url: '/departments'
    },
    {
      title: 'Designations',
      url: '/designations'
    },
  ];
  public pages2 = [
    // {
    //   title: 'Projects',
    //   url: '/project-list'
    // },
    // {
    //   title: 'Tasks',
    //   url: '/tasks'
    // },
    // {
    //   title: 'Events',
    //   url: '/events'
    // }, 
    {
      title: 'Leave List',
      url: '/leave-list'
    },
    // {
    //   title: 'Clients',
    //   url: '/clients'
    // },
    // {
    //   title: 'Email',
    //   url: '/email'
    // },
    // {
    //   title: 'Chat',
    //   url: '/chats'
    // }
  ];
  public pages3 = [
    {
      title: 'Attendance',
      url: '/attendance'
    },
    {
      title: 'Settings',
      url: '/settings'
    }
  ];
  public calls = [
    // {
    //   title: 'Voice Call',
    //   url: '/voice-call'
    // },
    // {
    //   title: 'Video Call',
    //   url: '/video-call'
    // },
    // {
    //   title: 'Incoming Call Page',
    //   url: '/incoming-call'
    // }
  ];
  public accounts = [
    // {
    //   title: 'Estimates',
    //   url: '/estimates'
    // },
    // {
    //   title: 'Invoices',
    //   url: '/invoices'
    // },
    // {
    //   title: 'Payments',
    //   url: '/payments'
    // },
    // {
    //   title: 'Expenses',
    //   url: '/expenses'
    // }
  ];
  public payroll = [
    {
      title: 'Employee Salary',
      url: '/employee-salary'
    },
    {
      title: 'Payslip',
      url: '/pay-slip'
    }
  ];
  public pages = [
    {
      title: 'Login',
      url: '/login'
    },
    {
      title: 'Register',
      url: '/register'
    },
    {
      title: 'Forgot Password',
      url: '/forgot-password'
    },
    {
      title: 'Profile',
      url: '/profile/1'
    },
    {
      title: 'Walkthrough',
      url: '/walkthrough'
    }
  ];

  constructor(  private platform: Platform, 
                private splashScreen: SplashScreen, 
                public dataService: JsonService,
                private statusBar: StatusBar, 
                public router: Router, 
                public util: UtilService,
                // private storage: StorageService, 
                private storage: Storage,
                public apiservice: ApiService) {
    this.initializeApp();
    if (localStorage.getItem('keywords')) {
      this.keywords = JSON.parse(localStorage.getItem('keywords'));
    }
  }

  formatDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#0A15D5');
      this.splashScreen.hide();
      console.log(this.router.getCurrentNavigation())
      // this.router.navigateByUrl('/home');
      
      
      // let token= await this.storage.get('token')
      const username = await this.storage.get('username'); console.log(username);
      const expired = await this.storage.get('expired'); console.log(expired);
      this.router.navigateByUrl('/walkthrough');
      if (username) {
        console.log("username exists");
        if (expired) {
          console.log("expired exists");
          const now = new Date();
          //const currentDateTime = format(now, 'yyyy-MM-dd HH:mm:ss');
          const currentDateTime = this.formatDateTime(now);
          console.log(expired);
          console.log(currentDateTime);
          if (expired > currentDateTime) {
            console.log("blm expired");
            this.router.navigateByUrl('/home'); //this.util.navigateRoot('/tabs');
          } else {
            console.log("udh expired");
            await this.storage.remove('username');
            await this.storage.remove('expired');
            await this.storage.remove('token');
            await this.storage.remove('userlogin');            
            this.router.navigateByUrl('/walkthrough'); //this.util.navigateRoot('');
          }
        } else {
          console.log("expired not exists");
          this.router.navigateByUrl('/walkthrough'); //this.util.navigateRoot('');
        }        
      } else {
        console.log("username not exists");
        this.router.navigateByUrl('/walkthrough'); //this.util.navigateRoot('');
      }    
      
      // if (localStorage.getItem("loginStatus")) {
      //   this.router.navigateByUrl('/home');
      // } else {
      //   this.router.navigateByUrl('/home');
      // }
    });
    this.getLanguages();
    this.menuOpened();

  }
  menuOpened() {
    this.role = localStorage.getItem("role");
    this.roleId = localStorage.getItem("role_id");
    // this.menus = JSON.parse(localStorage.getItem('menus'));
    // // console.log(this.menus);
    // // if (localStorage.getItem('menus')){
    //   for (const [key, value] of this.menus) {
    //     console.log(key, value);
    //   // }
    // }

  }
  getLanguages() {
    // var url = this.apiservice.getLanguage();
    // var token = { token: "DQCTPQMKK9R6SXN4" };
    // var language;
    // if (localStorage.getItem('language')) {
    //   language = localStorage.getItem('language');
    // }
    // else {
    //   language = "en";
    // }
    // var data = { code: language };
    // console.log(data);
    // this.util.postService(url, data, token)
    //   .then((data: any) => {
    //     //console.log(data);
    //     var resp = JSON.parse(data.data);
    //     this.keywords = resp.data[0];
    localStorage.setItem("keywords", JSON.stringify(this.dataService.keywords));
    //     console.log(resp);

    //     //console.log(resp.data.unique_code);
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     // this.loading.dismiss();
    //     this.util.showAlert(
    //       "SMART HRMS",
    //       "Unable to reach server at the moment"
    //     );
    //   });
  }
  menuClosed() {
    this.role = localStorage.getItem("role");
    this.roleId = localStorage.getItem("role_id");
    // this.menus = JSON.parse(localStorage.getItem('menus'));
    // // console.log(this.menus);
  }

  getstyle() {
    this.primaryColor = localStorage.getItem("primary_color");
    this.secondryColor = localStorage.getItem("secondry_color");
    return {
      background:
        "linear-gradient(" + this.primaryColor + "," + this.secondryColor + ")"
    };
  };
  openSub(page) {
    this.subPage = Object.assign({}, { [page]: !this.subPage[page] });
    console.log(this.subPage);

  }
}
