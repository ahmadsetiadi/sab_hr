import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoiceCallPage } from './voice-call.page';

describe('VoiceCallPage', () => {
  let component: VoiceCallPage;
  let fixture: ComponentFixture<VoiceCallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceCallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoiceCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
