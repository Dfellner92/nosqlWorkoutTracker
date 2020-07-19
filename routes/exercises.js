//Required the built model for a workout entry
//also requiring the router function within express

const Workout = require("../models/workout.js");
const router = require("express").Router();


// The routes use mongoose methods to :

// get previously made workouts to display and graph

router.get("/api/workouts", (req, res) => {
  Workout.find()
      .then(data => res.json(data))
      .catch(err => {
        res.json(err);
      })
});

// create new workout entries

router.post("/api/workouts/", function (req, res) {
  Workout.create({})
      .then(data => res.json(data))
      .catch(err => {
        console.log("err", err)
        res.json(err);
      })
});

// update previously made workouts

router.put("/api/workouts/:id", function (req, res) {
  Workout.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}}, {new: true})
      .then(data => res.json(data))
      .catch(err => {
        res.json(err);
      })
});

module.exports = router;