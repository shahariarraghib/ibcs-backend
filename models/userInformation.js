const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      validate: [validator.isEmail, "provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email address is required"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    role: {
      type: String,
    },

    username: {
      type: String,
      required: [true, "please provide your user name"],
      unique: [true, "name must be unique"],
      minLength: [3, "company must be at list 3 characters"],
      maxLength: [100, "name is to long"],
    },
    
    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "active",
    },
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },

  { timestamps: true }
);

// password hashing
userSchema.pre("save", function (next) {
  const password = this.password;
  const hashedPassword = bcryptjs.hashSync(password);
  this.password = hashedPassword;
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcryptjs.compareSync(password, hash);
  return isPasswordValid; 
};

const user = mongoose.model("user", userSchema);
module.exports = user;