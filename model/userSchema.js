const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

userSchema.methods.CreateNewUser = async function (name, email, message) {
  try {
    this.name = name;
    this.email = email;
    this.messages = this.messages.concat({ message });
    return await this.save();
  } catch (Err) {
    console.log("new user create schema err");
  }
};
userSchema.methods.addMessage = async function (message) {
  try {
    this.messages = this.messages.concat({ message });
    return await this.save();
  } catch (err) {
    console.log("add message schema err");
  }
};
const UserModel = mongoose.model("message", userSchema);

module.exports = UserModel;
