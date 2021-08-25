const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "What type of workout is this (Resistance or Cardio)?",
  },
  name: {
    type: String,
    required: "What is the name of this workoout?",
  },
  duration: {
    type: Number,
    required: "How long is this workout in minutes?",
  },
  weight: {
    type: Number,
    required: "How heavy are your weights? (Enter 0 if not using)",
  },
  reps: {
    type: Number,
    required: "How many reps?",
  },
  sets: {
    type: Number,
    required: "How many sets?",
  },
});

const Workout = mongoose.model("Workout", workoutsSchema);

module.exports = Workout;
