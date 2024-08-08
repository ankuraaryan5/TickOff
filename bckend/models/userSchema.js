import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email!",
    },
  },
  password: { type: String, required: true },
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  } catch (err) {
    next(err);
  }
});
const User = mongoose.model("User", userSchema);
export default User;
