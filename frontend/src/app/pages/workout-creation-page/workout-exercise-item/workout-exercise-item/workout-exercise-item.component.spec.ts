import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutExerciseItemComponent } from './workout-exercise-item.component';

describe('WorkoutExerciseItemComponent', () => {
  let component: WorkoutExerciseItemComponent;
  let fixture: ComponentFixture<WorkoutExerciseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutExerciseItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutExerciseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
