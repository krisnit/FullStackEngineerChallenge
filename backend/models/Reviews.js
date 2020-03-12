const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const reviewSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "users" },
  name: {
    type: String,
    required: true
  },
  username:{
    type:String
  },
  instructions: {
    type: String
  },
  comments: {
    type: String, default:""
  },
  editors: [{value:{type:Schema.Types.ObjectId, ref:'users'}, label:{type:String},feedbacks:{type:String, default:""} }],
  createdAt: { type: Date, default: Date.now }
});

const Reviews = mongoose.model("review", reviewSchema);
module.exports = Reviews;
