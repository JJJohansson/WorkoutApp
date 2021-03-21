package workout_backend.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(value = "workout")
public class Workout {
    @Id
    private ObjectId id;
    private String name;
    private String type;
    private List<WorkoutExercise> exercises;
    private String notes;

    public Workout() { }

    public Workout(String name, String type, List<WorkoutExercise> exercises, String notes) {
        this.name = name;
        this.type = type;
        this.exercises = exercises;
        this.notes = notes;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<WorkoutExercise> getExercises() {
        return exercises;
    }

    public void setExercises(List<WorkoutExercise> exercises) {
        this.exercises = exercises;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
