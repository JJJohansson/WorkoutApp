import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkoutModel } from '../models/workout-model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) { }

  getWorkouts(): Observable<WorkoutModel[]> {
    const workoutURL = 'http://localhost:8080/workouts';
    return this.http.get<WorkoutModel[]>(workoutURL);
  }

}
