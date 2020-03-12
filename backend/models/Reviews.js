const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const reviewSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "users" },
  name: {
    type: String,
    required: true
  },
  comments: {
    type: String
  },
  isComplete: { type: Boolean, default: false },
  feedbacks: [],
  editors: [],
  createdAt: { type: Date, default: Date.now }
});

const Reviews = mongoose.model("review", reviewSchema);
module.exports = Reviews;
