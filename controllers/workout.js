const Workout = require("../models/Workout");

exports.addWorkout = async (req, res) => {
  const { name, description, duration } = req.body;
  try {
    const workout = new Workout({
      userId: req.user.id,
      name,
      description,
      duration,
      
    });

    await workout.save();
    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMyWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({userId: req.user.id});
    res.json({workouts});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateWorkout = async (req, res) => {
  const { name, duration, status } = req.body;
  try {
    const workout = await Workout.findByIdAndUpdate(
      req.params.workoutId,
      { name, duration, status },
      { new: true }
    );
    res.status(200).json({Message: 'Updated workout successfully', updatedWorkout: workout});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteWorkout = async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.workoutId);
    res.status(200).json({ message: "Workout deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.completeWorkoutStatus = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.workoutId);
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    workout.status = 'Completed';
    await workout.save();
    res.json(workout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
