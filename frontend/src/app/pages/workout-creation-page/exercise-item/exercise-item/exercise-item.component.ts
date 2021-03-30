import { Component, OnInit } from '@angular/core';
import { ExerciseModel } from 'src/app/models/exercise-model';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';

@Component({
  selector: 'app-exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.css']
})
export class ExerciseItemComponent implements OnInit {
  exercise: string = '';
  exercises: ExerciseModel[];
  sets: number;
  reps: number;
  weight: number;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.exerciseService.getWorkouts().subscribe(exercises => {
      console.log(exercises);
      this.exercises = exercises;
    })
  }

}
