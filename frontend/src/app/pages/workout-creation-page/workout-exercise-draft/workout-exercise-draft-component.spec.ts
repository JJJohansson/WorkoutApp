import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutExerciseDraftComponent } from './workout-exercise-draft-component';

describe('ExerciseItemComponent', () => {
  let component: WorkoutExerciseDraftComponent;
  let fixture: ComponentFixture<WorkoutExerciseDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutExerciseDraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutExerciseDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
