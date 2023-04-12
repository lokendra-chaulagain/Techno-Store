import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  
  verified: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("User", userSchema);
