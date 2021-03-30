import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExerciseModel } from 'src/app/models/exercise/exercise-model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) { }

  getWorkouts(): Observable<ExerciseModel[]> {
    const exerciseURL = 'http://localhost:8080/exercises';
    return this.http.get<ExerciseModel[]>(exerciseURL);
  }
}
