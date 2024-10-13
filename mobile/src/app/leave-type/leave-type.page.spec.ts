import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeaveTypePage } from './leave-type.page';

describe('LeaveTypePage', () => {
  let component: LeaveTypePage;
  let fixture: ComponentFixture<LeaveTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
