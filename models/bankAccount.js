const mongoose = require("mongoose");
const validator = require("validator");

const bankAccountSchema = mongoose.Schema(
  {
    accountType: {
      type: String,
      enum: ["savings", "current"],
      default: "savings",
      trim: true,
      lowercase: true,
      required: [true, "Account Type is required"],
    },

    bankAccountname: {
      type: String,
      required: [true, "please provide your Bank Account name"],
      minLength: [3, "name must be at list 3 characters"],
      maxLength: [100, "name is to long"],
    },

    accountNumber: {
      type: String,
      unique: [true, "Account number must be unique"],
      required: [true, "Account Number is required"],
    },
    balance: {
      type: String,
    },

    bankName: {
      type: String,
      required: [true, "bank name is required"],
    },
    branchName: {
      type: String,
      required: [true, "branch name is required"],
    },
  },

  { timestamps: true }
);
const bankAccount = mongoose.model("bankAccount", bankAccountSchema);
module.exports = bankAccount;
