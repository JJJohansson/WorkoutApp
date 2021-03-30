import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCreationPageComponent } from './workout-creation-page.component';

describe('WorkoutCreationPageComponent', () => {
  let component: WorkoutCreationPageComponent;
  let fixture: ComponentFixture<WorkoutCreationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutCreationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
