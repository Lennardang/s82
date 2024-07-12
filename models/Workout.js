const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "I.D. is required"],
  },
  name: { type: String, required: true },
  duration: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Workout", workoutSchema);
