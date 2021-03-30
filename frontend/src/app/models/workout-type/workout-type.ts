import { WorkoutTypeModel } from "./workout-type-model";

export class WorkoutType implements WorkoutTypeModel {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
