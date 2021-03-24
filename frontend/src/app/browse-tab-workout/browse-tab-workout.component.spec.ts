import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTabWorkoutComponent } from './browse-tab-workout.component';

describe('BrowseTabWorkoutComponent', () => {
  let component: BrowseTabWorkoutComponent;
  let fixture: ComponentFixture<BrowseTabWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseTabWorkoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseTabWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
