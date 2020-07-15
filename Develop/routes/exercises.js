const router = require("express").Router();
const Exercises = require("../models");

router.post("/api/exercise", ({}, res) => {
    Exercises.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts", ({body}, res) => {
    Exercises.find({body})
      .sort({ date: -1 })
      .then(dbWorkout=> {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;