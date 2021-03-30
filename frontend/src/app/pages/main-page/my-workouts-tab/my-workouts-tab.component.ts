import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/services/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-my-workouts-tab',
  templateUrl: './my-workouts-tab.component.html',
  styleUrls: ['./my-workouts-tab.component.css']
})
export class MyWorkoutsTabComponent implements OnInit {
  searchTerm = '';
  workouts: Workout[] = [];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.workoutService.getWorkouts().subscribe(workouts => {
      console.log(workouts);
      this.workouts = workouts;
    })
  }

}
