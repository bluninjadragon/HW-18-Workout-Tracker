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
      },
      name: {
        type: String,
        trim: true,
      },
      duration: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutsSchema);

module.exports = Workout;
