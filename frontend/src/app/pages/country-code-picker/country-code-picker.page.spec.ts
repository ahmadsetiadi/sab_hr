/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryCodePickerPage } from './country-code-picker.page';

describe('CountryCodePickerPage', () => {
  let component: CountryCodePickerPage;
  let fixture: ComponentFixture<CountryCodePickerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CountryCodePickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
