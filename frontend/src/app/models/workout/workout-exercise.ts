import { WorkoutExerciseModel } from "./workout-exercise-model";

export class WorkoutExercise implements WorkoutExerciseModel {
  name: string;
  sets: number;
  reps: number;
  weight: number;

  constructor(name: string, sets: number, reps: number, weight: number) {
    this.name = name;
    this.sets = sets;
    this.reps = reps;
    this.weight = weight;
  }
}
