package gymappbackend.models;

import java.util.Date;

public class Type {
    private int id;
    private String name;

    public Type() {}

    public Type(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
