import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreteEstimatePage } from './crete-estimate.page';

describe('CreteEstimatePage', () => {
  let component: CreteEstimatePage;
  let fixture: ComponentFixture<CreteEstimatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreteEstimatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreteEstimatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
