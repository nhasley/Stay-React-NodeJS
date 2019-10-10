const router = require("express").Router();
let House = require("../../models/house");

router.route("/").get((req, res) => {
  House.find()
    .then(houses => res.json(houses))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/add').post((req, res) => {
  let house = new House(req.body)
  house.save().then(house => {
    res.status(200).json({'house': 'house added successfully'})
  }).catch(err => {
    res.statusMessage(400).send('adding new listing failed')
  } )
})

router.route("/:id").get((req,res) => {
  House.findById(req.params.id, (err, house) => {
    res.json(house)
  })
})

router.route("/:id").delete((req, res) => {
  House.findByIdAndDelete(req.params.id)
    .then(() => res.json("Listing deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  House.findById(req.params.id)
    .then(house => {
      house.photo = req.body.photo;
      house.title = req.body.title;
      house.description = req.body.description;
      house.guests = Number(req.body.guests);
      house.pricing = Number(req.body.pricing);
      house.user = req.body.user;

      house
        .save()
        .then(() => res.json("Listing updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;