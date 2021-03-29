package workout_backend.dao;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;
import workout_backend.models.Workout;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.mongodb.client.model.Filters.eq;
import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

public class WorkoutDAO {
    private static ConnectionString connectionString = new ConnectionString("mongodb://localhost:27017");
    private static MongoClientSettings clientSettings = MongoClientSettings.builder()
            .applyConnectionString(connectionString)
            .codecRegistry(getPojoCodecRegistry())
            .build();

    public static Workout saveWorkout(Workout workout) {
        try (MongoClient mongoClient = MongoClients.create(clientSettings)) {
            MongoDatabase workoutDB = mongoClient.getDatabase("workout-db");
            MongoCollection<Workout> workoutCollection = workoutDB.getCollection("workout", Workout.class);

            ObjectId newWorkoutId = workoutCollection.insertOne(workout)
                    .getInsertedId().asObjectId().getValue();
            Bson convertedId = eq("_id", newWorkoutId);

            return mapRequestIdToWorkout(workoutCollection.find(convertedId).first());
        }
    }

    public static List<Workout> getAllWorkouts() {
        try (MongoClient mongoClient = MongoClients.create(clientSettings)) {
            MongoDatabase workoutDB = mongoClient.getDatabase("workout-db");
            MongoCollection<Workout> workoutCollection = workoutDB.getCollection("workout", Workout.class);

            return workoutCollection.find().into(new ArrayList<>())
                    .stream().map(workout -> mapRequestIdToWorkout(workout)).collect(Collectors.toList());
        }
    }

    public static Workout getWorkoutById(String id) {
        try (MongoClient mongoClient = MongoClients.create(clientSettings)) {
            MongoDatabase workoutDB = mongoClient.getDatabase("workout-db");
            MongoCollection<Workout> workoutCollection = workoutDB.getCollection("workout", Workout.class);
            Bson convertedId = eq("_id", new ObjectId(id));

            return mapRequestIdToWorkout(workoutCollection.find(convertedId).first());
        }
    }

    // THIS NEEDS WORK! PROBABLY DOES NOT WORK!
    public static Workout updateWorkout(Workout workout) {
        try (MongoClient mongoClient = MongoClients.create(clientSettings)) {
            MongoDatabase workoutDB = mongoClient.getDatabase("workouts");
            MongoCollection<Workout> workoutCollection = workoutDB.getCollection("workout", Workout.class);
            Bson convertedId = eq("_id", new ObjectId(workout.getId().toString()));

            return workoutCollection.findOneAndReplace(convertedId, workout);
        }
    }

    public static String deleteWorkout(String id) {
        try (MongoClient mongoClient = MongoClients.create(clientSettings)) {
            MongoDatabase workoutDB = mongoClient.getDatabase("workout-db");
            MongoCollection<Workout> workoutCollection = workoutDB.getCollection("workout", Workout.class);
            Bson idToBeDeleted = eq("_id", new ObjectId(id));

            return workoutCollection.findOneAndDelete(idToBeDeleted).getRequestId();
        }
    }

    private static Workout mapRequestIdToWorkout(Workout workout) {
        workout.setRequestId(workout.getId().toString());

        return workout;
    }

    private static CodecRegistry getPojoCodecRegistry() {
        CodecRegistry pojoCodecRegistry = fromProviders(PojoCodecProvider.builder().automatic(true).build());
        CodecRegistry codecRegistry = fromRegistries(MongoClientSettings.getDefaultCodecRegistry(), pojoCodecRegistry);

        return codecRegistry;
    }
}
