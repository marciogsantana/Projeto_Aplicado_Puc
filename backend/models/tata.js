const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
  },
  {
    timestamps: true,
  }
  );

const User1 = mongoose.model("User1", userSchema);

User1.










module.exports = User1;