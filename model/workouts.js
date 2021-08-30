const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "What type of workout is this (Resistance or Cardio)?",
      },
      name: {
        type: String,
        trim: true,
        required: "What is the name of this workoout?",
      },
      duration: {
        type: Number,
        required: "How long is this workout in minutes?",
      },
      distance: {
        type: Number,
        required: "How far did you run?",
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
    },
  ],
});

const Workout = mongoose.model("Workout", workoutsSchema);

module.exports = Workout;
