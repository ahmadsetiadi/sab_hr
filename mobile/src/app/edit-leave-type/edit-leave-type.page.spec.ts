import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditLeaveTypePage } from './edit-leave-type.page';

describe('EditLeaveTypePage', () => {
  let component: EditLeaveTypePage;
  let fixture: ComponentFixture<EditLeaveTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLeaveTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditLeaveTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
