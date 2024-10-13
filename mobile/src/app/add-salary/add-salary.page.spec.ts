import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSalaryPage } from './add-salary.page';

describe('AddSalaryPage', () => {
  let component: AddSalaryPage;
  let fixture: ComponentFixture<AddSalaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSalaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
