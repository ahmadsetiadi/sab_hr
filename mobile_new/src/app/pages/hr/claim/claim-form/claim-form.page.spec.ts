/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaimFormPage } from './claim-form.page';

describe('ClaimFormPage', () => {
  let component: ClaimFormPage;
  let fixture: ComponentFixture<ClaimFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClaimFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
