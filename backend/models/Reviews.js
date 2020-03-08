const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const reviewSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "users" },
  responsibilites: {
    type: String
  },
  achievements: {
    type: String
  },
  innovation: {
    type: String
  },
  isComplete: { type: Boolean, default: false },
  feedbacks: [
    {
      user: { type: Schema.Types.ObjectId, ref: "users" },
      feedback: { type: String, required: true },
      createdAt: { type: Date, default: Date.now }
    }
  ],
  editors: [{ type: Schema.Types.ObjectId, ref: "users" }],
  createdAt: { type: Date, default: Date.now }
});

const Reviews = mongoose.model("review", reviewSchema);
module.exports = Reviews;
