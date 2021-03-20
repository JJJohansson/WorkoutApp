package gymappbackend.models;

import java.util.Date;

public class Workout {
    private int id;
    private String name;
    private int type;
    private int exercise;
    private Date created_at;
    private Date edited_at;
    private int sets;
    private int reps;
    private int weight;

    public Workout() { }

    public Workout(String name, int type, int exercise, Date created_at, Date edited_at, int sets, int reps, int weight) {
        this.name = name;
        this.type = type;
        this.exercise = exercise;
        this.created_at = created_at;
        this.edited_at = edited_at;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public int getExercise() {
        return exercise;
    }

    public void setExercise(int exercise) {
        this.exercise = exercise;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getEdited_at() {
        return edited_at;
    }

    public void setEdited_at(Date edited_at) {
        this.edited_at = edited_at;
    }

    public int getSets() {
        return sets;
    }

    public void setSets(int sets) {
        this.sets = sets;
    }

    public int getReps() {
        return reps;
    }

    public void setReps(int reps) {
        this.reps = reps;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }
}
