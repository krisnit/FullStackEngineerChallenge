const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const reviewSchema = new mongoose.Schema({
  username: { type: Schema.Types.ObjectId, ref: "users" },
  responsibilites: {
    type: String
  },
  achievements: {
    type: String
  },
  innovation: {
    type: String
  },
  comments: [
    {
      user: { type: Schema.Types.ObjectId, ref: "users" },
      comment: { type: String, required: true },
      createdAt: { type: Date, default: Date.now }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

const Reviews = mongoose.model("review", reviewSchema);
module.exports = Reviews;
