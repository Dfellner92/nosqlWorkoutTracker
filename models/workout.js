// uses the mongoose package
const mongoose = require("mongoose");
// allows for easy access to the mongoose schema
const Schema = mongoose.Schema;
// Schema based on the api 
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
        type: {
            type: String,
            trim: true,
            required: "Exercise type is required"
        },
        name: {
            type: String,
            trim: true,
            required: "Exercise name is required"
        },
        duration: {
            type: Number,
            required: "Duration in minutes is required"
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
        distance: {
            type: Number
        }
    }
    ]
},
{
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }
);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;