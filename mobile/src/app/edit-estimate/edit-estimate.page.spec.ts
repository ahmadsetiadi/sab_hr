import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditEstimatePage } from './edit-estimate.page';

describe('EditEstimatePage', () => {
  let component: EditEstimatePage;
  let fixture: ComponentFixture<EditEstimatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEstimatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditEstimatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
