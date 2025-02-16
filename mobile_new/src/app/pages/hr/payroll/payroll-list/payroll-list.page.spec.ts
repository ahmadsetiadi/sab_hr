/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayrollListPage } from './payroll-list.page';

describe('CheckinPage', () => {
  let component: PayrollListPage;
  let fixture: ComponentFixture<PayrollListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PayrollListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
