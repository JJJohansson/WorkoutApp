package workout_backend.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import workout_backend.models.WorkoutType;

import java.util.List;

@Repository
public interface WorkoutTypeRepository extends MongoRepository<WorkoutType, ObjectId> {
    List<WorkoutType> findAll();
}
