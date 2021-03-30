import { Component, OnInit } from '@angular/core';
import { Workout } from '../../models/workout/workout';
import { WorkoutTypeModel } from 'src/app/models/workout-type/workout-type-model';
import { WorkoutTypeService } from 'src/app/services/workout-type/workout-type.service';
import { WorkoutExercise } from 'src/app/models/workout/workout-exercise';
import { WorkoutService } from 'src/app/services/workout/workout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-creation-page',
  templateUrl: './workout-creation-page.component.html',
  styleUrls: ['./workout-creation-page.component.css']
})
export class WorkoutCreationPageComponent implements OnInit {
  workoutExercises: WorkoutExercise[] = [];
  workoutTypes: WorkoutTypeModel[] = [];
  workoutType: string;
  workoutName: string;
  workout: Workout;
  type: string;

  constructor(private workoutTypeService: WorkoutTypeService,
    private workoutService: WorkoutService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.workoutTypeService.getWorkoutTypes().subscribe(workoutTypes => {
      console.log(workoutTypes);
      this.workoutTypes = workoutTypes;
    })
  }

  onWorkoutExerciseSaveEvent(workoutExercise: WorkoutExercise) {
    if (!!workoutExercise) {
      this.workoutExercises.push(workoutExercise);
    }
  }

  saveNewWorkout(): void {
    const workout: Workout = new Workout(null, null, this.workoutName, this.workoutType, this.workoutExercises);
    console.log(workout)
    this.workoutService.saveWorkout(workout).subscribe(response => {
      this.router.navigateByUrl('');
    });
  }
}
