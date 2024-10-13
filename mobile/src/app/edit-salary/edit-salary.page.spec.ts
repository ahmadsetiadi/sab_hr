import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditSalaryPage } from './edit-salary.page';

describe('EditSalaryPage', () => {
  let component: EditSalaryPage;
  let fixture: ComponentFixture<EditSalaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSalaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditSalaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
