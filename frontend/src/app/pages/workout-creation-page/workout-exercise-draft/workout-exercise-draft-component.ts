import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExerciseModel } from 'src/app/models/exercise/exercise-model';
import { WorkoutExercise } from 'src/app/models/workout/workout-exercise';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';

@Component({
  selector: 'app-workout-exercise-draft',
  templateUrl: './workout-exercise-draft-component.html',
  styleUrls: ['./workout-exercise-draft-component.css']
})
export class WorkoutExerciseDraftComponent implements OnInit {
  @Output() exerciseDraftRemovalEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() exerciseWorkoutSaveEvent: EventEmitter<WorkoutExercise> = new EventEmitter();
  exercise: string = '';
  exercises: ExerciseModel[];
  sets: number;
  reps: number;
  weight: number;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.exerciseService.getWorkouts().subscribe(exercises => {
      this.exercises = exercises;
    });
  }

  saveExercise(): void {
    console.log(this.exercise, this.sets, this.reps, this.weight)
    this.exerciseWorkoutSaveEvent.emit(new WorkoutExercise(this.exercise, this.sets, this.reps, this.weight));
  }

}
