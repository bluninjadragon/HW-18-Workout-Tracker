const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  //for whatever reason, the exercises array is not populating correctly in MONGO. Need to ask instructor why that's the case. Even the tutor is perplexed - rest of code matches how my tutor would have done this
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
        required: "What is the name of this workout?",
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
