import { Component, Input, OnInit } from '@angular/core';
import { WorkoutExercise } from 'src/app/models/workout/workout-exercise';

@Component({
  selector: 'app-workout-exercise-item',
  templateUrl: './workout-exercise-item.component.html',
  styleUrls: ['./workout-exercise-item.component.css']
})
export class WorkoutExerciseItemComponent implements OnInit {
  @Input() workoutExercise: WorkoutExercise;
  name: string;
  sets: number;
  reps: number;
  weight: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.workoutExercise);
    this.name = this.workoutExercise.name;
    this.sets = this.workoutExercise.sets;
    this.reps = this.workoutExercise.reps;
    this.weight = this.workoutExercise.weight;
  }

}
