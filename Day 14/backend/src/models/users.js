const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   isAdmin: { type: Boolean, required: true },
})

const Users = mongoose.model("Users", userSchema);

module.exports = Users;