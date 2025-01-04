/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoyalProgramsPage } from './loyal-programs.page';

describe('LoyalProgramsPage', () => {
  let component: LoyalProgramsPage;
  let fixture: ComponentFixture<LoyalProgramsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoyalProgramsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
