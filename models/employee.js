const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;
const employeeSchema = mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: [true, "employee id is required"],
      unique: [true, "employee id must be unique"],
    },

    employeename: {
      type: String,
      required: [true, "please provide your employee name"],
      minLength: [3, "name must be at list 3 characters"],
      maxLength: [100, "name is to long"],
    },

    grade: {
      type: String,
      required: [true, "grade is required"],
    },

    address: {
      type: String,
      required: [true, "address is required"],
    },

    mobileNumber: {
      type: String,
      required: [true, "mobile naumber is required"],
    },
    bankAccount: {
      accountNumber: {
        type: String,
      },
      employeeid: {
        type: ObjectId,
        ref: "bankAccount",
      },
    },
    salary: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["Paid", "Unpaid"],
      default: "Unpaid",
    },
  },

  { timestamps: true }
);
const employee = mongoose.model("employee", employeeSchema);
module.exports = employee;
