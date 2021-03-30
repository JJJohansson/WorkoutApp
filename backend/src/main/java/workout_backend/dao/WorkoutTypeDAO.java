package workout_backend.dao;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;
import workout_backend.models.Exercise;
import workout_backend.models.WorkoutType;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

public class WorkoutTypeDAO {
    private static ConnectionString connectionString = new ConnectionString("mongodb://localhost:27017");
    private static MongoClientSettings clientSettings = MongoClientSettings.builder()
            .applyConnectionString(connectionString)
            .codecRegistry(getPojoCodecRegistry())
            .build();

    public static List<WorkoutType> getAllWorkoutTypes() {
        try (MongoClient mongoClient = MongoClients.create(clientSettings)) {
            MongoDatabase workoutDB = mongoClient.getDatabase("workout-db");
            MongoCollection<WorkoutType> workoutTypeCollection = workoutDB.getCollection("workout_type", WorkoutType.class);

            return workoutTypeCollection.find().into(new ArrayList<>())
                    .stream().map(workout -> mapRequestIdToWorkoutType(workout)).collect(Collectors.toList());
        }
    }

    private static WorkoutType mapRequestIdToWorkoutType(WorkoutType workoutType) {
        workoutType.setRequestId(workoutType.getId().toString());
        return workoutType;
    }

    private static CodecRegistry getPojoCodecRegistry() {
        CodecRegistry pojoCodecRegistry = fromProviders(PojoCodecProvider.builder().automatic(true).build());
        CodecRegistry codecRegistry = fromRegistries(MongoClientSettings.getDefaultCodecRegistry(), pojoCodecRegistry);
        return codecRegistry;
    }
}
