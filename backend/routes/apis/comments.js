const express = require("express");
const router = express.Router();

//api/feedback - see all feedbacks
router.get("/", (req, res) => res.send("feedback route"));

module.exports = router;
