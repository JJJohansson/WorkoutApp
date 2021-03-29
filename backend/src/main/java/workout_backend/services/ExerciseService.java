package workout_backend.services;

import org.springframework.stereotype.Service;
import workout_backend.dao.ExerciseDAO;
import workout_backend.models.Exercise;

import java.util.List;

@Service
public class ExerciseService {

    public List<Exercise> findAll() {
        return ExerciseDAO.getAllExercises();
    }
}
