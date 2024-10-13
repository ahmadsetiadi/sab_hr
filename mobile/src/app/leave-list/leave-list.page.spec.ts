import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeaveListPage } from './leave-list.page';

describe('LeaveListPage', () => {
  let component: LeaveListPage;
  let fixture: ComponentFixture<LeaveListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
