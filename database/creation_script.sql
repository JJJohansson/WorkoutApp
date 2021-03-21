CREATE Table IF NOT EXISTS Workout (
    id serial PRIMARY KEY,
    name text NOT NULL,
    type integer NOT NULL,
    exercise integer NOT NULL,
    created_at date NOT NULL DEFAULT CURRENT_DATE,
    edited_at date,
    sets integer,
    reps integer,
    weight integer,
    CONSTRAINT Workout_fk FOREIGN KEY (type) REFERENCES Type (id)
);

CREATE Table IF NOT EXISTS Exercise (
    id serial PRIMARY KEY,
    name text NOT NULL
);

CREATE Table IF NOT EXISTS Workout_Exercise (
    workout_id integer REFERENCES Workout (id) ON UPDATE CASCADE ON DELETE CASCADE,
    exercise_id integer REFERENCES Exercise (id) ON UPDATE CASCADE,
    CONSTRAINT Workout_Exercise_pkey PRIMARY KEY (workout_id, exercise_id)
);

CREATE Table IF NOT EXISTS Type (
    id serial PRIMARY KEY,
    name text NOT NULL
);
