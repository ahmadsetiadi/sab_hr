import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesignationsPage } from './designations.page';

describe('DesignationsPage', () => {
  let component: DesignationsPage;
  let fixture: ComponentFixture<DesignationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesignationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
