const Workout = require("../models/workout.js");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  Workout.find()
      .then(data => res.json(data))
      .catch(err => {
        res.json(err);
      })
});

router.post("/api/workouts", function (req, res) {
  Workout.create({})
      .then(data => res.json(data))
      .catch(err => {
        console.log("err", err)
        res.json(err);
      })
});

module.exports = router;