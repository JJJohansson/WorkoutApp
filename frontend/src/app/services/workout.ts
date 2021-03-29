import { ObjectId } from "../models/object-id";
import { WorkoutExerciseModel } from "../models/workout-exercise-model";
import { WorkoutModel } from "../models/workout-model";

export class Workout implements WorkoutModel {
	id: ObjectId;
	requestId: string;
	name: string;
	type: string;
	exercises: WorkoutExerciseModel;
	notes?: string;
	content?: string;
	picture?: any;
	
	constructor(id: ObjectId, requestId: string, name: string, type: string,
		exercises: WorkoutExerciseModel, notes?: string, content?: string, picture?: any) {
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
