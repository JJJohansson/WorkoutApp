import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout } from '../../models/workout/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) { }

  getWorkouts(): Observable<Workout[]> {
    const workoutURL = 'http://localhost:8080/workouts';
    return this.http.get<Workout[]>(workoutURL);
  }

  saveWorkout(workout: Workout): Observable<Workout> {
    const workoutURL = 'http://localhost:8080/workout';
    return this.http.post<Workout>(workoutURL, workout);
  }
}
