/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsByCategoryPage } from './products-by-category.page';

describe('ProductsByCategoryPage', () => {
  let component: ProductsByCategoryPage;
  let fixture: ComponentFixture<ProductsByCategoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductsByCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
