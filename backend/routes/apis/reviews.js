const express = require("express");
const router = express.Router();
const Reviews = require("../../models/Reviews");
const adminauth = require("../../middleware/adminauth");
const User = require("../../models/User");
//api/reviews - see all feebacks
router.get("/", (req, res) => res.send("reviews route"));

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
module.exports = router;
