const Workout = require("../models/workout.js");
module.exports = function (app) {

  app.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      })
  });

  app.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then(data => res.json(data))
      .catch(err => {
        console.log("err", err)
        res.json(err);
      })
  });

}