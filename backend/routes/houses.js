const router = require("express").Router();
let House = require("../models/house.model");

router.route("/").get((req, res) => {
  House.find()
    .then(houses => res.json(houses))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const guests = req.body.guests;
  const duration = req.body.duration;
  const user = req.body.user;

  const newHouse = new House({
    title,
    description,
    guests,
    duration,
    user
  });

  newHouse
    .save()
    .then(() => res.json("Listing added!"))
    .catch(err => res.statusMessage(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  House.findByIdAndDelete(req.params.id)
    .then(() => res.json("Listing deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  House.findById(req.params.id)
    .then(house => {
      house.title = req.body.title;
      house.description = req.body.description;
      house.guests = Number(req.body.guests);
      house.duration = Date.parse(req.body.duration);
      house.user = req.body.user;

      house
        .save()
        .then(() => res.json("Listing updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;