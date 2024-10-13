import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewChatPage } from './view-chat.page';

describe('ViewChatPage', () => {
  let component: ViewChatPage;
  let fixture: ComponentFixture<ViewChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
