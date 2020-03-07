const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  admin: { type: Boolean }
});

const User = mongoose.model("user", userSchema);

mongoose.exports = User;
