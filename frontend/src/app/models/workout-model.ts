import { WorkoutExerciseModel } from "./workout-exercise-model";

export interface WorkoutModel {
    id: number,
    name: string,
    type: string,
    exercises: WorkoutExerciseModel,
    notes?: string, // for possible future implementation
    content?: string, // for browse page showcase
    picture?: any // CHANGE THIS TO IMG TYPE
}
