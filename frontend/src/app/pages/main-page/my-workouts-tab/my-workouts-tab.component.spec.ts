import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkoutsTabComponent } from './my-workouts-tab.component';

describe('MyWorkoutsComponent', () => {
  let component: MyWorkoutsTabComponent;
  let fixture: ComponentFixture<MyWorkoutsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWorkoutsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkoutsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
