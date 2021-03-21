begin;
	insert into exercise(name) values
		('Bench press'),
		('Deadlift'),
		('Incline bench press'),
		('Squat'),
		('Press up'),
		('Pull up'),
		('Biceps curl'),
		('Lat pulldown'),
		('Rowing'),
		('Side Lateral Raise'),
		('Forward Lateral Raise'),
		('Overhead press'),
		('Leg press'),
		('Leg Extension'),
		('Abs');

	insert into workout_type(name) values
		('Strength'),
		('Aerobic'),
		('Flexibility'),
		('Balance');
		
commit;