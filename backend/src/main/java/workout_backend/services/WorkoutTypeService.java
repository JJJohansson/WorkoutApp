package workout_backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import workout_backend.models.WorkoutType;
import workout_backend.repositories.WorkoutTypeRepository;

import java.util.List;

@Service
public class WorkoutTypeService {
    @Autowired
    private WorkoutTypeRepository workoutTypeRepository;

    public List<WorkoutType> findAll() {
        return workoutTypeRepository.findAll();
    }
}
