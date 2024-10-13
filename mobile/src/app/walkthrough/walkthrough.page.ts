import { Component, OnInit } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})

export class WalkthroughPage implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;
  blackLogo: any;
  slides1: any = [true, false, false]

  constructor(public navContrl: NavController) {
    // this.blackLogo = "assets/imgs/Logo-new.png";
    this.blackLogo = "assets/imgs/bint2.png";
  }

  ngOnInit() {
  }
  getStarted() {
    this.navContrl.navigateRoot("/login");
  }
  getClass(i) {
    return this.slides1[i] ? 'slide' + (i + 1) + '-activated' : ''
  }

  slideChanged(e: any) {
    this.slides.getActiveIndex().then((index: number) => {
      console.log(index);
      this.slides1 = [false, false, false];
      this.slides1[index] = true;
    });
  }
  previousSlide() {
    (!this.slides1[0]) ? this.slides.slidePrev() : ''
  }
  nextSlide() {
    this.slides.slideNext();
  }
}
