import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalarySettingsPage } from './salary-settings.page';

describe('SalarySettingsPage', () => {
  let component: SalarySettingsPage;
  let fixture: ComponentFixture<SalarySettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarySettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalarySettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
