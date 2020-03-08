const express = require("express");
const router = express.Router();
const Reviews = require("../../models/Reviews");
const adminauth = require("../../middleware/adminauth");
const User = require("../../models/User");
const userauth = require("../../middleware/userauth");

//api/reviews - create a performance review
router.post("/", adminauth, async (req, res) => {
  let { achievements, innovation, createdAt } = req.body;
  try {
    let user = await User.findById(req.user.id).select("-password");
    let review = new Reviews({
      user: user.id,
      achievements,
      innovation,
      createdAt
    });
    await review.save();
    return res.status(200).send({ msg: "Review created successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: "server error" });
  }
});

//api/reviews - get performance review by id
router.get("/:id", userauth, async (req, res) => {
  try {
    let review = await Reviews.findById(req.params.id);
    if (!review) {
      return res.status(404).send({ msg: "Post not found" });
    }
    return res.status(200).send({ review });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: "server error" });
  }
});

//api/reviews - see all performance reviews
router.get("/", adminauth, async (req, res) => {
  try {
    let reviews = await Reviews.find().sort({ createdAt: -1 });
    return res.status(200).send({ reviews });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: "server error" });
  }
});

//api/reviews/:id - delete a performace review - only admin
router.delete("/:id", userauth, async (req, res) => {
  try {
    await Reviews.findByIdAndDelete(req.params.id);
    return res.status(200).send({ msg: "deleted the review" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: "server error" });
  }
});

module.exports = router;
