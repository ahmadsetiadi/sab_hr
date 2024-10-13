import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDesignationPage } from './add-designation.page';

describe('AddDesignationPage', () => {
  let component: AddDesignationPage;
  let fixture: ComponentFixture<AddDesignationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDesignationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDesignationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
