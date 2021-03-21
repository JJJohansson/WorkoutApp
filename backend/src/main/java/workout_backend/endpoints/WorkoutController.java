package workout_backend.endpoints;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import workout_backend.models.Workout;
import workout_backend.service.WorkoutService;

import java.util.List;

@RestController
public class WorkoutController {

    @Autowired
    WorkoutService workoutService;

    @RequestMapping(value = "/workouts")
    public List<Workout> getWorkouts() {
        return workoutService.findAll();
    }

}
