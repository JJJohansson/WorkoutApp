package workout_backend.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import workout_backend.models.Exercise;

import java.util.List;

@Repository
public interface ExerciseRepository extends MongoRepository<Exercise, ObjectId> {
    List<Exercise> findAll();
}