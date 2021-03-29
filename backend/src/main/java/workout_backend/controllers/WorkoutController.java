package workout_backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import workout_backend.models.Workout;
import workout_backend.services.WorkoutService;

import java.util.List;

@RestController
public class WorkoutController {
    @Autowired
    WorkoutService workoutService;

    @RequestMapping(value = "/workout",  method = RequestMethod.GET, produces = "application/json")
    public Workout getWorkout(@RequestParam String id) {
        return workoutService.getWorkoutById(id);
    }

    @RequestMapping(value = "/workouts",  method = RequestMethod.GET, produces = "application/json")
    List<Workout> getAllWorkouts() {
        return workoutService.getAllWorkouts();
    }

    @RequestMapping(value = "/workout",  method = RequestMethod.POST, produces = "application/json")
    public Workout saveWorkout(@RequestBody Workout workout) {
        return workoutService.saveWorkout(workout);
    }

    /*
    @RequestMapping(value = "/workout",  method = RequestMethod.PUT, produces = "application/json")
    public Workout updateWorkout(@RequestBody Workout workout) {
        return workoutService.updateWorkout(workout);
    }
     */

    @RequestMapping(value = "/workout",  method = RequestMethod.DELETE, produces = "application/json")
    public String deleteWorkout(@RequestParam String id) {
        return workoutService.deleteWorkout(id);
    }
}
