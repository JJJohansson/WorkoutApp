import { Component, OnInit } from '@angular/core';
import { WorkoutModel } from 'src/app/models/workout-model';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-my-workouts-tab',
  templateUrl: './my-workouts-tab.component.html',
  styleUrls: ['./my-workouts-tab.component.css']
})
export class MyWorkoutsTabComponent implements OnInit {
  searchTerm = '';
  workouts: WorkoutModel[] = [];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.workoutService.getWorkouts().subscribe(workouts => {
      console.log(workouts);
    })
  }

}
