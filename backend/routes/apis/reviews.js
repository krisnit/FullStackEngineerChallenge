const express = require("express");
const router = express.Router();
const Reviews = require("../../models/Reviews");
const auth = require("../../middleware/auth");
const User = require("../../models/User");
//api/reviews - see all feebacks
router.get("/", (req, res) => res.send("reviews route"));

//api/reviews - create a performance review
router.post("/", [auth], async (req, res) => {
  let { username, achievements, innovation, comments, createdAt } = req.body;
});
module.exports = router;
