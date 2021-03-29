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
import workout_backend.models.Exercise;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.mongodb.client.model.Filters.eq;
import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

public class ExerciseDAO {
    private static ConnectionString connectionString = new ConnectionString("mongodb://localhost:27017");
    private static MongoClientSettings clientSettings = MongoClientSettings.builder()
            .applyConnectionString(connectionString)
            .codecRegistry(getPojoCodecRegistry())
            .build();

    public static List<Exercise> getAllExercises() {
        try (MongoClient mongoClient = MongoClients.create(clientSettings)) {
            MongoDatabase workoutDB = mongoClient.getDatabase("workout-db");
            MongoCollection<Exercise> exerciseCollection = workoutDB.getCollection("exercise", Exercise.class);

            return exerciseCollection.find().into(new ArrayList<>())
                    .stream().map(workout -> mapRequestIdToExercise(workout)).collect(Collectors.toList());
        }
    }

    public static Exercise getExercise(String id) {
        try (MongoClient mongoClient = MongoClients.create(clientSettings)) {
            MongoDatabase workoutDB = mongoClient.getDatabase("workout-db");
            MongoCollection<Exercise> exerciseCollection = workoutDB.getCollection("workout", Exercise.class);
            Bson convertedId = eq("_id", new ObjectId(id));

            return mapRequestIdToExercise(exerciseCollection.find(convertedId).first());
        }
    }

    private static Exercise mapRequestIdToExercise(Exercise exercise) {
        exercise.setRequestId(exercise.getId().toString());
        return exercise;
    }

    private static CodecRegistry getPojoCodecRegistry() {
        CodecRegistry pojoCodecRegistry = fromProviders(PojoCodecProvider.builder().automatic(true).build());
        CodecRegistry codecRegistry = fromRegistries(MongoClientSettings.getDefaultCodecRegistry(), pojoCodecRegistry);
        return codecRegistry;
    }
}
