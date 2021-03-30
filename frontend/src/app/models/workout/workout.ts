import { ObjectId } from "./object-id";
import { WorkoutExercise } from "./workout-exercise";
import { WorkoutExerciseModel } from "./workout-exercise-model";
import { WorkoutModel } from "./workout-model";

export class Workout implements WorkoutModel {
	id: ObjectId;
	requestId: string;
	name: string;
	type: string;
	exercises: WorkoutExercise[];
	notes?: string;
	content?: string;
	picture?: any;

	constructor(id: ObjectId, requestId: string, name: string, type: string,
		exercises: WorkoutExercise[], notes?: string, content?: string, picture?: any) {
			this.id = id;
			this.requestId = requestId;
			this.name = name;
			this.type = type;
			this.exercises = exercises;
			this.notes = notes;
			this.content = content;
			this.picture = picture;
	}
}
