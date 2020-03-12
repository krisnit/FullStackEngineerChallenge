const express = require("express");
const router = express.Router();
const Reviews = require("../../models/Reviews");
const adminauth = require("../../middleware/adminauth");
const User = require("../../models/User");
const userauth = require("../../middleware/userauth");

//api/reviews - create a performance review
router.post("/", adminauth, async (req, res) => {
  let { user, comments, name, editors } = req.body;
  try {
    let getUser = await User.findById(user);
    if (!getUser) {
      return res.status(400).send({ msg: "No such user exists" });
    }
    
    //if no performance review is pending then create new one
    let review = new Reviews({
user, comments, name, editors 
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
router.delete("/:id", adminauth, async (req, res) => {
  try {
    await Reviews.findByIdAndDelete(req.params.id);
    return res.status(200).send({ msg: "deleted the review" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: "server error" });
  }
});

//api/reviews/:id - update a performace review - only admin
router.put("/:id", adminauth, async (req, res) => {
  let { achievements, innovation } = req.body;
  try {
    let review = await Reviews.findById(req.params.id);
    review.achievements = achievements;
    review.innovation = innovation;
    await review.save();
    return res.status(200).send({ msg: "updated the review" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: "server error" });
  }
});



module.exports = router;
