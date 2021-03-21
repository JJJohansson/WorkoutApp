-- CREATE TABLES
create table if not exists workout_type (
    id serial primary key,
    name text not null
);

create table if not exists exercise (
    id serial primary key,
    name text not null
);

create table if not exists workout (
    id serial primary key,
    name text not null,
    workout_type_id integer references workout_type (id),
    exercise_id integer
);

create table if not exists workout_exercise (
    workout_id integer references workout (id),
    exercise_id integer references exercise (id),
    sets integer,
    reps integer,
    weight integer,
    primary key (workout_id, exercise_id)
);
