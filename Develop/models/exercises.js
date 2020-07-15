const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name of Exercise is Required"
  },
  weight: {
      type: Number,
      trim: true,
      required: "Amount in pounds is Required"
  },
  weight: {
    type: Number,
    trim: true,
    required: "Amount in pounds is Required"
  },
  weight: {
    type: Number,
    trim: true,
    required: "Amount in pounds is Required"
  },
  });

const Exercises = mongoose.model("Exercises", ExercisesSchema);

module.exports = Exercises;