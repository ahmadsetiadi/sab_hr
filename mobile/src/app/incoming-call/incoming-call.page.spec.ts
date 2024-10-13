import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncomingCallPage } from './incoming-call.page';

describe('IncomingCallPage', () => {
  let component: IncomingCallPage;
  let fixture: ComponentFixture<IncomingCallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingCallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncomingCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
