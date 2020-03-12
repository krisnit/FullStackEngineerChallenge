const express = require("express");
const router = express.Router();
const Reviews = require("../../models/Reviews");
const userauth = require("../../middleware/userauth");

//api/feedbacks/:id - see all feedbacks for a performance review
router.get("/:id", userauth, async (req, res) => {
  try {
    let review = await Reviews.findById(req.params.id);
    return res.status(200).send({ feedbacks: review.feedbacks });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: "internal server error" });
  }
});



module.exports = router;
