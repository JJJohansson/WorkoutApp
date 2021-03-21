package workout_backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import workout_backend.models.Workout;

import java.util.List;

@Repository
public interface WorkoutRepository extends CrudRepository<Workout, Long> {
    List<Workout> findAll();
}
