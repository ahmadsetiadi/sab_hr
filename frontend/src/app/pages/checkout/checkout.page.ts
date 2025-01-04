/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { register } from 'swiper/element';
import * as moment from 'moment';
import { UtilService } from 'src/app/services/util.service';
import { OrderDetailsPage } from '../order-details/order-details.page';
import { AddAddressPage } from '../add-address/add-address.page';
import Swiper from 'swiper';
import { ModalController } from '@ionic/angular';

register();
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  @ViewChild("swiper") swiper?: ElementRef<{ swiper: Swiper }>
  @ViewChild("slideDate") dateslide?: ElementRef<{ swiper: Swiper }>
  index: any = 0;
  slideOptsDate = {
    initialSlide: 0,
    slidesPerView: 3.5,
    spaceBetween: 10,
  };
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    allowTouchMove: false
  };
  width: any = 5;
  pick: any = '';
  delivery: any = '';

  currentDate: any;
  currentWeek: any = 0;
  currentMonth: any = '';
  days: any[] = [];
  initDate: any;
  selectedDate: any;
  time: any[] = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '03:00 PM', '04:00 PM',
    '04:30 PM', '05:00 PM', '05:30 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM'
  ];
  selectedSlot: any = '';
  selected: any = 'paypal';
  constructor(
    public util: UtilService,
    private modalController: ModalController
  ) {
    setTimeout(() => {
      this.dateConfi();
    }, 1000);
  }

  dateConfi() {

    this.selectedDate = moment().format().split('T')[0];
    this.currentDate = moment().format().split('T')[0];
    this.days = [];
    this.initDate = moment().format();
    const startOfWeek = moment().startOf('week');
    const endOfWeek = moment().endOf('week');
    let day = startOfWeek;
    while (day <= endOfWeek) {
      const data = {
        date: day.toDate().getDate(),
        day: day.format('ddd'),
        val: day.format(),
        selectDay: day.format('dddd DD MMMM')
      }
      this.days.push(data);
      day = day.clone().add(1, 'd');
    }
  }

  selectDate(date: any) {
    console.log(date)
    if (this.currentDate <= date.val.split('T')[0]) {
      this.selectedDate = date.val.split('T')[0];
      console.log(this.selectedDate);
    }
  }

  ngOnInit() {
  }

  onBack() {
    this.util.onBack();
  }

  slideChanged(event: any) {
    this.index = this.swiper?.nativeElement.swiper.activeIndex;
    if (this.index == 0) {
      this.width = 5;
    } else if (this.index == 1) {
      this.width = 35;
    } else if (this.index == 2) {
      this.width = 70;
    } else if (this.index == 3) {
      this.width = 100;
    }
  }

  onPickup(name: any) {
    this.pick = name;
  }

  onDelviery(name: any) {
    this.delivery = name;
  }

  async addNewAddress() {
    const modal = await this.modalController.create({
      component: AddAddressPage,
      cssClass: 'long-modal'
    });
    await modal.present();
  }

  onNext() {
    this.swiper?.nativeElement.swiper.slideNext();
  }

  nextWeek() {
    this.days = [];
    this.currentWeek++;
    console.log(this.currentWeek);
    const startOfWeek = moment().add(this.currentWeek, 'weeks').startOf('week');
    const endOfWeek = moment().add(this.currentWeek, 'weeks').endOf('week');
    let day = startOfWeek;
    while (day <= endOfWeek) {
      const data = {
        date: day.toDate().getDate(),
        day: day.format('ddd'),
        val: day.format(),
        selectDay: day.format('dddd DD MMMM')
      }
      this.days.push(data);
      day = day.clone().add(1, 'd');
    }
    this.currentDate = this.days[0].val;
    console.log(this.days);
  }

  getMonth() {
    return moment(this.currentDate).format('MMMM YYYY');
  }

  previousWeek() {
    if (this.currentWeek !== 0) {
      this.days = [];
      this.currentWeek = this.currentWeek - 1;
      const startOfWeek = moment().add(this.currentWeek, 'weeks').startOf('week');
      const endOfWeek = moment().add(this.currentWeek, 'weeks').endOf('week');
      let day = startOfWeek;
      while (day <= endOfWeek) {
        const data = {
          date: day.toDate().getDate(),
          day: day.format('ddd'),
          val: day.format(),
          selectDay: day.format('dddd DD MMMM')
        }
        this.days.push(data);
        day = day.clone().add(1, 'd');
      }
      this.currentDate = this.days[0].val;
      console.log(this.days);
    }
  }

  changeSlot(name: string, index: number) {
    if (index % 2 != 0) {
      this.selectedSlot = name;
    }
  }

  async openOrderDetails() {
    const modal = await this.modalController.create({
      component: OrderDetailsPage,
      cssClass: 'long-modal'
    });
    await modal.present();
  }

  onHome() {
    this.util.navigateRoot('/tabs/home');
  }

}
