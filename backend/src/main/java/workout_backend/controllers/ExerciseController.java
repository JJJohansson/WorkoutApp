package workout_backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import workout_backend.models.Exercise;
import workout_backend.services.ExerciseService;

import java.util.List;

@RestController
public class ExerciseController {
    @Autowired
    ExerciseService exerciseService;

    @RequestMapping(value = "/exercises", method = RequestMethod.GET, produces = "application/json")
    public List<Exercise> getExercises() {
        return exerciseService.findAll();
    }
}
