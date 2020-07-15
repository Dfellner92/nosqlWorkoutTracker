const router = require("express").Router();
const Workout = require("../models/transaction.js");

router.post("/api/exercise", ({ body }, res) => {
    Workout.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });