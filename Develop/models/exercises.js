const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
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
        }
    },
    {
        name: {
            type: String,
            trim: true,
            required: "Exercise name is required"
        }
    },
    {
        duration: {
            type: Number,
            required: "Duration in minutes is required"
        }
    },
    {
        weight: {
            type: Number,
            required: "Weight in pounds is required"
        }
    },
    {
        reps: {
            type: Number,
            required: "Number of reps are required"
        }
    },
    {
        sets: {
            type: Number,
            required: "Number of sets are required"
        }
    },
    ]
})

const Exercises = mongoose.model("Exercises", ExercisesSchema);

module.exports = Exercises;