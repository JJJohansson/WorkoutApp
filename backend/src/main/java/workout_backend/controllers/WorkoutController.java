package workout_backend.controllers;

import com.mongodb.client.result.UpdateResult;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import workout_backend.dao.WorkoutDAO;
import workout_backend.models.Workout;
import workout_backend.services.WorkoutService;

import java.util.List;

@RestController
public class WorkoutController {
    @Autowired
    WorkoutService workoutService;

    @RequestMapping(value = "/workouts",  method = RequestMethod.GET, produces = "application/json")
    List<Workout> getAllWorkouts() {
        return WorkoutDAO.getAllWorkouts();
    }

    @RequestMapping(value = "/workouts",  method = RequestMethod.POST, produces = "application/json")
    public boolean saveWorkout(@RequestBody Workout workout) {
        return WorkoutDAO.saveWorkout(workout);
    }

    @RequestMapping(value = "/workouts",  method = RequestMethod.PUT, produces = "application/json")
    public Workout updateWorkout(@RequestBody Workout workout) {
        return WorkoutDAO.updateWorkout(workout);
    }

    @RequestMapping(value = "/workouts",  method = RequestMethod.DELETE, produces = "application/json")
    public HttpStatus deleteWorkout(@RequestParam String id) {
        return workoutService.deleteWorkout(id);
    }
}
