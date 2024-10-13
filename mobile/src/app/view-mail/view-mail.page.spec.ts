import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewMailPage } from './view-mail.page';

describe('ViewMailPage', () => {
  let component: ViewMailPage;
  let fixture: ComponentFixture<ViewMailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
