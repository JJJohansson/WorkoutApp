package workout_backend.controllers;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import workout_backend.models.Workout;
import workout_backend.services.WorkoutService;

import java.util.List;

@RestController
public class WorkoutController {
    @Autowired
    WorkoutService workoutService;

    @RequestMapping(value = "/workouts",  method = RequestMethod.GET, produces = "application/json")
    ResponseEntity<List<Workout>> getAllWorkouts() {
        return ResponseEntity.status(HttpStatus.OK)
                .body(workoutService.findAllWorkouts());
    }

    @RequestMapping(value = "/workouts",  method = RequestMethod.POST, produces = "application/json")
    public Workout saveWorkout(@RequestBody Workout workout) {
        return workoutService.saveWorkout(workout);
    }

    @RequestMapping(value = "/workouts",  method = RequestMethod.PUT, produces = "application/json")
    public Workout updateWorkout(@RequestBody Workout workout) {
        return workoutService.saveWorkout(workout);
    }

    @RequestMapping(value = "/workouts",  method = RequestMethod.DELETE, produces = "application/json")
    public Workout deleteWorkout(@RequestBody Workout workout) {
        return workoutService.deleteWorkout(workout);
    }
}
