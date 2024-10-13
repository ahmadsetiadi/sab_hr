import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewLeavePage } from './view-leave.page';

describe('ViewLeavePage', () => {
  let component: ViewLeavePage;
  let fixture: ComponentFixture<ViewLeavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLeavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewLeavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
