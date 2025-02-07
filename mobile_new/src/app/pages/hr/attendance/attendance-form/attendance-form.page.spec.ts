/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendanceFormPage } from './attendance-form.page';

describe('AttendanceFormPage', () => {
  let component: AttendanceFormPage;
  let fixture: ComponentFixture<AttendanceFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AttendanceFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
