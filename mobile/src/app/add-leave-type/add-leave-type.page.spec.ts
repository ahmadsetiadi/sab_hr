import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddLeaveTypePage } from './add-leave-type.page';

describe('AddLeaveTypePage', () => {
  let component: AddLeaveTypePage;
  let fixture: ComponentFixture<AddLeaveTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLeaveTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddLeaveTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
