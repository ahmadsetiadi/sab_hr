/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeepPhotoPage } from './employee-photo.page';

describe('EmployeepPhotoPage', () => {
  let component: EmployeepPhotoPage;
  let fixture: ComponentFixture<EmployeepPhotoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmployeepPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
