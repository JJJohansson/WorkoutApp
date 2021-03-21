package workout_backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import workout_backend.models.Type;

import java.util.List;

@Repository
public interface TypeRepository extends CrudRepository<Type, Long> {
    List<Type> findAll();
}
