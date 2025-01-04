/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddWishlistPage } from './add-wishlist.page';

describe('AddWishlistPage', () => {
  let component: AddWishlistPage;
  let fixture: ComponentFixture<AddWishlistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddWishlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
