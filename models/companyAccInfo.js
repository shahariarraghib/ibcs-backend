const mongoose = require("mongoose");
const validator = require("validator");

const companyAccSchema = mongoose.Schema(
  {
    baseSalary: {
      type: Number,
      // required: [true, "baseSalary is required"],
    },

    companyBalance: {
      type: Number,
      // required: [true, "companyBalance is required"],
    },
  },

  { timestamps: true }
);
const companyAccInfo = mongoose.model("companyAccInfo", companyAccSchema);
module.exports = companyAccInfo;
