package workout_backend.models;

import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "workout_type")
public class WorkoutType {
    @Id
    private ObjectId id;
    private String requestId; // hacky solution, lol.
    @BsonProperty(value = "name")
    private String name;

    public WorkoutType() {}

    public WorkoutType(String name) {
        this.name = name;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getRequestId() {
        return requestId;
    }

    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "WorkoutType{" +
                "id=" + id +
                ", requestId='" + requestId + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
