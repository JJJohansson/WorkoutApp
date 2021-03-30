import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExerciseModel } from 'src/app/models/exercise-model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseServiceService {

  constructor(private http: HttpClient) { }

  getExercises(): Observable<ExerciseModel[]> {
    const exerciseUrl = 'http://localhost:8080/exercises';
    return this.http.get<ExerciseModel[]>(exerciseUrl);
  }
}
