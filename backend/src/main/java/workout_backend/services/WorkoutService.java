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

    /**
     * @return All workouts
     */
    public List<Workout> findAllWorkouts() {
        return workoutRepository.findAll();
    }

    /**
     * @param workout
     * @return New or updated workout
     */
    public Workout saveWorkout(Workout workout) {
        return workoutRepository.save(workout);
    }

    /**
     *
     * @param workout
     * @return Deleted workout so it can be removed from frontend view
     */
    public Workout deleteWorkout(Workout workout) {
        return workoutRepository.deleteById(workout);
    }
}
