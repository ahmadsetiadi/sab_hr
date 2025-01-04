/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Injectable, NgZone } from '@angular/core';
import { LoadingController, AlertController, ToastController, NavController, MenuController } from '@ionic/angular';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  isLoading = false;
  languagesList: any[] = [
    "English (US)",
    "English (UK)",
    "हिंदी",
    "日本",
    "తెలుగు",
    "Turkish",
    "Tagalog",
    "Burmese",
    "Lingala",
    "Yoruba",
    "Bhojpuri",
  ];
  countryCodes: any[] = [];
  slidersList: any[] = [
    "assets/images/slider/1.png",
    "assets/images/slider/2.png",
    "assets/images/slider/3.png",
    "assets/images/slider/4.png",
    "assets/images/slider/5.png",
    "assets/images/slider/6.png",
    "assets/images/slider/7.png",
  ];
  cateList: any[] = [
    {
      "image": "assets/images/category/vegetables.png",
      "name": "Vegetables",
    },
    {
      "image": "assets/images/category/food.png",
      "name": "Fruits",
    },
    {
      "image": "assets/images/category/barbecue.png",
      "name": "Meats",
    },
    {
      "image": "assets/images/category/seafood.png",
      "name": "Seafood",
    },
    {
      "image": "assets/images/category/proteins.png",
      "name": "Milk & Egg",
    },
    {
      "image": "assets/images/category/bakery.png",
      "name": "Bread",
    },
    {
      "image": "assets/images/category/fish.png",
      "name": "Frozen",
    },
    {
      "image": "assets/images/category/organic.png",
      "name": "Organic",
    },
  ];
  productsList: any[] = [
    {
      "images": "assets/images/products/1.png",
      "name": "Pumpkin",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 5
    },
    {
      "images": "assets/images/products/2.png",
      "name": "Cucumber",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 8
    },
    {
      "images": "assets/images/products/3.png",
      "name": "Tomato",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 9
    },
    {
      "images": "assets/images/products/4.png",
      "name": "Eggplant",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 7
    },
    {
      "images": "assets/images/products/5.png",
      "name": "Onion",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 5
    },
    {
      "images": "assets/images/products/6.png",
      "name": "Asparagus",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 7
    },
    {
      "images": "assets/images/products/7.png",
      "name": "Arracacia",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 9
    },
    {
      "images": "assets/images/products/8.png",
      "name": "Ginger",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/9.png",
      "name": "Rutabaga",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 20
    },
    {
      "images": "assets/images/products/10.png",
      "name": "Turnip",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 30
    },
    {
      "images": "assets/images/products/11.png",
      "name": "Celeriac",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 74
    },
    {
      "images": "assets/images/products/21.png",
      "name": "Celery",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 65
    },
    {
      "images": "assets/images/products/22.png",
      "name": "Grapefruit",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 50
    },
    {
      "images": "assets/images/products/23.png",
      "name": "Hazelnut",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 6
    },
    {
      "images": "assets/images/products/24.png",
      "name": "Dragon Fruit",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 3
    },
    {
      "images": "assets/images/products/25.png",
      "name": "Chempedak",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 41
    },
    {
      "images": "assets/images/products/26.png",
      "name": "Coconut",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 30
    },
    {
      "images": "assets/images/products/27.png",
      "name": "Cherimoya",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 45
    },
    {
      "images": "assets/images/products/28.png",
      "name": "Dragonrfruit",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 60
    },
    {
      "images": "assets/images/products/29.png",
      "name": "Grapefruit",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 50
    },
    {
      "images": "assets/images/products/30.png",
      "name": "Ackee",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 56
    },
    {
      "images": "assets/images/products/31.png",
      "name": "Jenipapo",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 20
    },
    {
      "images": "assets/images/products/32.png",
      "name": "Rambutan",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 30
    },
    {
      "images": "assets/images/products/33.png",
      "name": "Strawberries",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 46
    },
    {
      "images": "assets/images/products/34.png",
      "name": "Papaya",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 75
    },
    {
      "images": "assets/images/products/35.png",
      "name": "Raspberries",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 63
    },
    {
      "images": "assets/images/products/36.png",
      "name": "Tangerine",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 75
    },
    {
      "images": "assets/images/products/37.png",
      "name": "Kiwano",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 54
    },
    {
      "images": "assets/images/products/38.png",
      "name": "Jujube",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 65
    },
    {
      "images": "assets/images/products/39.png",
      "name": "Mulberry",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/40.png",
      "name": "Nance",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 45
    },
    {
      "images": "assets/images/products/41.png",
      "name": "Oranges",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 63
    },
    {
      "images": "assets/images/products/42.png",
      "name": "Kiwano",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 42
    },
    {
      "images": "assets/images/products/43.png",
      "name": "Pear",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 41
    },
    {
      "images": "assets/images/products/44.png",
      "name": "Sapota",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 63
    },
    {
      "images": "assets/images/products/45.png",
      "name": "Ramphal",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 87
    },
    {
      "images": "assets/images/products/46.png",
      "name": "Sudachi",
      "value": "1KG",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 69
    },
  ];
  brandsList: any[] = [
    {
      "image": "assets/images/brands/amul.png",
      "name": "Amul Dairy",
      "sub_title": "Dairy Products"
    },
    {
      "image": "assets/images/brands/balaji.png",
      "name": "Balaji Wafers",
      "sub_title": "Namkeen"
    },
    {
      "image": "assets/images/brands/emami.png",
      "name": "Emami",
      "sub_title": "Retail Products"
    },
    {
      "image": "assets/images/brands/haldirams.png",
      "name": "Haldiram",
      "sub_title": "Namkeen"
    },
    {
      "image": "assets/images/brands/kissan.png",
      "name": "Kissan",
      "sub_title": "Grocery Products"
    },
    {
      "image": "assets/images/brands/mccain.png",
      "name": "Mc Cain",
      "sub_title": "Grocery Products"
    },
    {
      "image": "assets/images/brands/mother.png",
      "name": "Mother Dairy",
      "sub_title": "Dairy Products"
    },
    {
      "image": "assets/images/brands/parle.png",
      "name": "Parle Biscut",
      "sub_title": "Cookies & Retail"
    },
    {
      "image": "assets/images/brands/patanjali.png",
      "name": "Patanjali",
      "sub_title": "Ayurvedic medicine"
    },
    {
      "image": "assets/images/brands/vadilal.png",
      "name": "Vadilal",
      "sub_title": "Processed food"
    },
  ];
  categoryList: any[] = [
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_1.png",
      "name": "Fresh produce",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_2.png",
      "name": "Dairy and eggs",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_3.png",
      "name": "Meat and poultry",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_4.png",
      "name": "Seafood",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_5.png",
      "name": "Bread and bakery items",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_6.png",
      "name": "Canned and preserved",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_7.png",
      "name": "Frozen foods",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_8.png",
      "name": "Snacks and sweets",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_9.png",
      "name": "Beverages",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_10.png",
      "name": "Condiments and sauces",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_11.png",
      "name": "Spices and seasonings",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_12.png",
      "name": "Grains and pasta",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_13.png",
      "name": "Baking ingredients",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_14.png",
      "name": "Breakfast foods",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_15.png",
      "name": "Baby and toddler food",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_16.png",
      "name": "Pet food",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_17.png",
      "name": "Household",
    },
    {
      "image": "assets/images/category/50-Vegetable-coloured-simple_18.png",
      "name": "Vegetables",
    },
  ];
  addressList: any[] = [
    {
      "name": "Judy S. Ward",
      "address": "314 Shingleton Road Kalamazoo, MI 49007",
    },
    {
      "name": "Juanita T. Clay",
      "address": "3888 Leverton Cove Road Springfield, MA 01105",
    },
    {
      "name": "John M. Gaffney",
      "address": "2101 Jennifer Lane Franklinton, NC 27525",
    },
    {
      "name": "Marianne L. Walker",
      "address": "188 Sunset Drive Forrest City, AR 72335",
    },
    {
      "name": "Lorraine J. Sorrels",
      "address": "4252 Harron Drive Baltimore, MD 21202",
    },
    {
      "name": "Michael M. Saunders",
      "address": "3200 Sumner Street Los Angeles, CA 90017",
    },
    {
      "name": "Rachel G. Robinson",
      "address": "1607 Big Indian New Orleans, LA 70112",
    },
    {
      "name": "Rudolph L. Moses",
      "address": "3481 Bel Meadow Drive Chino, CA 91710",
    },
    {
      "name": "Scott B. McComas",
      "address": "3284 Maple Court Columbia, MO 65207"
    },
    {
      "name": "Rogelio M. Kerns",
      "address": "4047 Whitman Court Greenwich, CT 06830"
    },
    {
      "name": "Steven F. Gomez",
      "address": "2025 Edgewood Road Ash Flat, AR 72513"
    },
    {
      "name": "John K. Williams",
      "address": "990 Diamond Cove Providence, RI 02903"
    },
    {
      "name": "Kurt I. Dixon",
      "address": "163 Wolf Pen Road Redwood City, CA 94063"
    },
    {
      "name": "Jeanette M. Farkas",
      "address": "4267 Bingamon Branch Road Northbrook, IL 60062"
    },
    {
      "name": "Catharine M. Johnson",
      "address": "2774 Lang Avenue Tooele, UT 84074"
    },
    {
      "name": "Viola E. Campbell",
      "address": "3271 Orchard Street Burnsville, MN 55337"
    },
    {
      "name": "Denise S. Claar",
      "address": "1844 Edwards Street Creswell, NC 27928"
    },
  ];
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private router: Router,
    private zone: NgZone,
    private http: HttpClient,
  ) {
    this.getLocalAssets('country.json').then((data: any) => {
      this.countryCodes = data;
    });
  }

  changeMenuItems(action: boolean) {
    this.menuCtrl.enable(action);
  }

  openSideMenu() {
    this.menuCtrl.open();
  }

  navigateToPage(routes: any, param?: NavigationExtras | undefined) {
    this.zone.run(() => {
      console.log(routes, param);
      this.router.navigate([routes], param);
    });
  }

  navigateRoot(routes: any | string) {
    this.zone.run(() => {
      this.navCtrl.navigateRoot([routes]);
    });
  }

  getKeys(key: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve(localStorage.getItem(key))
    });
  }

  clearKeys(key: string) {
    // this.storage.remove(key);
    localStorage.removeItem(key);
  }

  setKeys(key: string, value: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve(localStorage.setItem(key, value));
    });
  }

  async show(msg?: string | null) {
    if (msg==null) { msg="Please wait..."};
    if (msg=="") { msg="Please wait..."};
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: msg && msg != '' && msg != null ? msg : '',
      spinner: 'bubbles',
    }).then(a => {
      a.present().then(() => {
        //console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async hide() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }

  /*
    Show Warning Alert Message
    param : msg = message to display
    Call this method to show Warning Alert,
    */
  async showWarningAlert(msg: any) {
    const alert = await this.alertCtrl.create({
      header: 'Warning',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showSimpleAlert(msg: any) {
    const alert = await this.alertCtrl.create({
      header: '',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  /*
   Show Error Alert Message
   param : msg = message to display
   Call this method to show Error Alert,
   */
  async showErrorAlert(msg: any) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  /*
     param : email = email to verify
     Call this method to get verify email
     */
  async getEmailFilter(email: string) {
    const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    if (!(emailfilter.test(email))) {
      const alert = await this.alertCtrl.create({
        header: 'Warning',
        message: 'Please enter valid email',
        buttons: ['OK']
      });
      await alert.present();
      return false;
    } else {
      return true;
    }
  }


  /*
    Show Toast Message on Screen
     param : msg = message to display, color= background
     color of toast example dark,danger,light. position  = position of message example top,bottom
     Call this method to show toast message
     */

  async showToast(msg: any, colors: any, positon: any) {


    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: colors,
      position: positon
    });
    toast.present();
    await Haptics.impact({ style: ImpactStyle.Medium });
  }
  async shoNotification(msg: any, colors: any, positon: any) {

    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000,
      color: colors,
      position: positon,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
    await Haptics.impact({ style: ImpactStyle.Medium });

  }

  async errorToast(msg: any, color?: string | (string & Record<never, never>) | undefined) {

    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: color ? color : 'dark'
    });
    toast.present();
    await Haptics.impact({ style: ImpactStyle.Medium });

  }

  onBack() {
    this.navCtrl.back();
  }

  makeid(length: any) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public getLocalAssets(name: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      };
      this.http.get('assets/json/' + name, header).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
}
