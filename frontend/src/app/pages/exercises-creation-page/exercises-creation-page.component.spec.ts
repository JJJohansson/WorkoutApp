import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesCreationPageComponent } from './exercises-creation-page.component';

describe('ExercisesCreationPageComponent', () => {
  let component: ExercisesCreationPageComponent;
  let fixture: ComponentFixture<ExercisesCreationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesCreationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
