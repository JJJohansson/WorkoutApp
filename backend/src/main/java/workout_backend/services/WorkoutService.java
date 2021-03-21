package workout_backend.services;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import workout_backend.models.Workout;
import workout_backend.repositories.WorkoutRepository;

import java.util.List;

@Service
public class WorkoutService {
    @Autowired
    private WorkoutRepository workoutRepository;

    public List<Workout> findAllWorkouts() {
        return workoutRepository.findAll();
    }

    public Workout saveWorkout(Workout workout) {
        return workoutRepository.save(workout);
    }

    //public Workout updateWorkout(ObjectId id) {
    //    return workoutRepository.updateById(id);
    //}

    public void deleteWorkout(ObjectId id) {
        workoutRepository.deleteById(id);
    }
}
