import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkoutTypeModel } from 'src/app/models/workout-type/workout-type-model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutTypeService {

  constructor(private http: HttpClient) { }

  getWorkoutTypes(): Observable<WorkoutTypeModel[]> {
    const workoutTypeURL = 'http://localhost:8080/workout_types';
    return this.http.get<WorkoutTypeModel[]>(workoutTypeURL);
  }
}
