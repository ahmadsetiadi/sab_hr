/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackingOrdersPage } from './tracking-orders.page';

describe('TrackingOrdersPage', () => {
  let component: TrackingOrdersPage;
  let fixture: ComponentFixture<TrackingOrdersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrackingOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
