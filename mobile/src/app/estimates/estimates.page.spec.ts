import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstimatesPage } from './estimates.page';

describe('EstimatesPage', () => {
  let component: EstimatesPage;
  let fixture: ComponentFixture<EstimatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstimatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
