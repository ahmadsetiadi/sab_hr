import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddHolidayPage } from './add-holiday.page';

describe('AddHolidayPage', () => {
  let component: AddHolidayPage;
  let fixture: ComponentFixture<AddHolidayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHolidayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddHolidayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
