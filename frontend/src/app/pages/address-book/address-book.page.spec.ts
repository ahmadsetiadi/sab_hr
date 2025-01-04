/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressBookPage } from './address-book.page';

describe('AddressBookPage', () => {
  let component: AddressBookPage;
  let fixture: ComponentFixture<AddressBookPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddressBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
