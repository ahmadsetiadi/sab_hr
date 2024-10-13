import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanySettingsPage } from './company-settings.page';

describe('CompanySettingsPage', () => {
  let component: CompanySettingsPage;
  let fixture: ComponentFixture<CompanySettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanySettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
