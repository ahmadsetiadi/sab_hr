/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaimListPage } from './claim-list.page';

describe('ClaimListPage', () => {
  let component: ClaimListPage;
  let fixture: ComponentFixture<ClaimListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClaimListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
