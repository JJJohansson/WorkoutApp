import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkoutsItemComponent } from './my-workouts-item.component';

describe('MyWorkoutsItemComponent', () => {
  let component: MyWorkoutsItemComponent;
  let fixture: ComponentFixture<MyWorkoutsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWorkoutsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkoutsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
