package workout_backend.services;

import org.springframework.stereotype.Service;
import workout_backend.dao.WorkoutTypeDAO;
import workout_backend.models.WorkoutType;

import java.util.List;

@Service
public class WorkoutTypeService {

    public List<WorkoutType> findAll() {
        return WorkoutTypeDAO.getAllWorkoutTypes();
    }
}
