import { Component, OnInit } from '@angular/core';
import { ExerciseModel } from 'src/app/models/exercise-model';
import { WorkoutTypeModel } from 'src/app/models/workout-type-model';
import { Workout } from 'src/app/services/workout';
import { WorkoutTypeService } from 'src/app/services/workout-type/workout-type.service';

@Component({
  selector: 'app-workout-creation-page',
  templateUrl: './workout-creation-page.component.html',
  styleUrls: ['./workout-creation-page.component.css']
})
export class WorkoutCreationPageComponent implements OnInit {
  exercises: number[] = [1];
  workoutTypes: WorkoutTypeModel[] = [];
  workoutType: WorkoutTypeModel;
  workoutName: string;
  workout: Workout;
  type: string;

  constructor(private workoutTypeService: WorkoutTypeService) {
  }

  ngOnInit(): void {
    this.workoutTypeService.getWorkoutTypes().subscribe(workoutTypes => {
      console.log(workoutTypes);
      this.workoutTypes = workoutTypes;
    })
  }

  addNewExerciseDraft(): void {
    this.exercises.push(1); // NOW THIS IS HACKY, WOO!
  }
}
