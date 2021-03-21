package workout_backend.endpoints;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import workout_backend.models.Exercise;
import workout_backend.service.ExerciseService;

import java.util.List;

@RestController
public class ExerciseController {
    @Autowired
    ExerciseService exerciseService;

    @RequestMapping(value = "/exercises")
    public List<Exercise> getExercises() {
        return exerciseService.findAll();
    }
}
