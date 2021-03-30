import { ExerciseModel } from "./exercise-model";

export class Exercise implements ExerciseModel {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
