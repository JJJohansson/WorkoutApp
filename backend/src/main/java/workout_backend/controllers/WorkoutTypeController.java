package workout_backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import workout_backend.models.WorkoutType;
import workout_backend.services.WorkoutTypeService;

import java.util.List;

@RestController
public class WorkoutTypeController {
    @Autowired
    WorkoutTypeService workoutTypeService;

    @CrossOrigin
    @RequestMapping(value = "/workout_types", method = RequestMethod.GET, produces = "application/json")
    public List<WorkoutType> getWorkoutTypes() {
        return workoutTypeService.findAll();
    }
}
