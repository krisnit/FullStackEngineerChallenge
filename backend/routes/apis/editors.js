const express = require("express");
const router = express.Router();
const Reviews = require("../../models/Reviews");
const adminauth = require("../../middleware/adminauth");
const User = require("../../models/User");
const userauth = require("../../middleware/userauth");


//api/editors/:id - who can comment on a review - only admin
router.post("/:id", adminauth, async (req, res) => {
  try {
    let review = await Reviews.findById(req.params.id);
      review.editors.push(req.body.user);
    await review.save();
    return res.status(200).send({ msg: "Added user to give feedback" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: "server error" });
  }
});

//api/editors/:id - who can comment on a review - only admin
router.get(":id",adminauth, async (req, res) => {
  try {
    let review = await Reviews.findById(req.params.id);
    return res.status(200).send({ editors: review.editors });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: "server error" });
  }
});

module.exports = router