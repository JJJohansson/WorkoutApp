package workout_backend.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import workout_backend.models.Workout;

import java.util.List;

@Repository
public interface WorkoutRepository extends MongoRepository<Workout, ObjectId> {
    List<Workout> findAll();
    Workout save(Workout workout); // save and update (model to be updated has the id in the request)
    Workout deleteById(Workout workout);
}
