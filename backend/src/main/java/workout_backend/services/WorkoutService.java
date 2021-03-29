package workout_backend.services;

import org.springframework.stereotype.Service;
import workout_backend.dao.WorkoutDAO;
import workout_backend.models.Workout;

import java.util.List;

@Service
public class WorkoutService {
    public Workout getWorkoutById(String id) {
        return WorkoutDAO.getWorkoutById(id);
    }

    public List<Workout> getAllWorkouts() {
        return WorkoutDAO.getAllWorkouts();
    }

    public Workout saveWorkout(Workout workout) {
        return WorkoutDAO.saveWorkout(workout);
    }

    public Workout updateWorkout(Workout workout) {
        return WorkoutDAO.updateWorkout(workout);
    }

    public String deleteWorkout(String id) {
        return WorkoutDAO.deleteWorkout(id);
    }
}
