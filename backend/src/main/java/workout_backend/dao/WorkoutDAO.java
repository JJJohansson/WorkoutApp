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

import static com.mongodb.client.model.Filters.eq;
import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

public class WorkoutDAO {
    private static String connectionString = "mongodb://localhost:27017";
    private static ConnectionString connectionString2 = new ConnectionString(connectionString);
    private static MongoClientSettings clientSettings = MongoClientSettings.builder()
            .applyConnectionString(connectionString2)
            .codecRegistry(getPojoCodecRegistry())
            .build();


    private static CodecRegistry getPojoCodecRegistry() {
        CodecRegistry pojoCodecRegistry = fromProviders(PojoCodecProvider.builder().automatic(true).build());
        CodecRegistry codecRegistry = fromRegistries(MongoClientSettings.getDefaultCodecRegistry(), pojoCodecRegistry);
        return codecRegistry;
    }

    public static boolean saveWorkout(Workout workout) {
        try (MongoClient mongoClient = MongoClients.create(clientSettings)) {
            MongoDatabase workoutDB = mongoClient.getDatabase("workout-db");
            MongoCollection<Workout> workoutCollection = workoutDB.getCollection("workout", Workout.class);
            return workoutCollection.insertOne(workout).wasAcknowledged();
        }
    }

    public static List<Workout> getAllWorkouts() {
        try (MongoClient mongoClient = MongoClients.create(clientSettings)) {
            MongoDatabase workoutDB = mongoClient.getDatabase("workout-db");
            MongoCollection<Workout> workoutCollection = workoutDB.getCollection("workout", Workout.class);
            return workoutCollection.find().into(new ArrayList<>());
        }
    }

    public static Workout updateWorkout(Workout workout) {
        try (MongoClient mongoClient = MongoClients.create(clientSettings)) {
            MongoDatabase workoutDB = mongoClient.getDatabase("workouts");
            MongoCollection<Workout> workoutCollection = workoutDB.getCollection("workout", Workout.class);
            Bson id = eq("_id", workout.getId());
            System.out.println();
            return workoutCollection.findOneAndReplace(id, workout);
        }
    }

    public static long deleteWorkout(String id) {
        try (MongoClient mongoClient = MongoClients.create(clientSettings)) {
            MongoDatabase workoutDB = mongoClient.getDatabase("workout-db");
            MongoCollection<Workout> workoutCollection = workoutDB.getCollection("workout", Workout.class);
            Bson idToBeDeleted = eq("_id", id);
            System.out.println(id.toString());
            return workoutCollection.deleteOne(idToBeDeleted).getDeletedCount();
        }
    }
}
