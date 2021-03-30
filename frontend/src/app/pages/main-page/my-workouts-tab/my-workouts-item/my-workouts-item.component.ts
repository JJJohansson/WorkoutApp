import { Component, OnInit, Input } from '@angular/core';
import { Workout } from 'src/app/services/workout';

@Component({
  selector: 'app-my-workouts-item',
  templateUrl: './my-workouts-item.component.html',
  styleUrls: ['./my-workouts-item.component.css']
})
export class MyWorkoutsItemComponent implements OnInit {
  @Input() workout: Workout;

  constructor() { }

  ngOnInit(): void {
  }

}
