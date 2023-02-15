const companyAccInfo = require("../models/companyAccInfo");
const employee = require("../models/employee");
const bankAccount = require("../models/bankAccount");
const { default: mongoose } = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { ObjectID } = require("bson");
exports.createemployeetService = async (data) => {
  const result = await employee.create(data);
  return result;
};

exports.getEmployeeService = async () => {
  const result = await employee.find({});
  return result;
};

exports.deleteEmployeeServiceById = async (id) => {
  const result = await employee.deleteOne({ _id: id });
  return result;
};

exports.getEmpolyeeServiceById = async (id) => {
  const result = await employee.findById(id);

  const result2 = await bankAccount.find();
  const bank = result2.filter((url) => {
    let id = url?.accountNumber;
    if (
      JSON.stringify(id) === JSON.stringify(result.bankAccount.accountNumber)
    ) {
      return url;
    }
  });
  // return bank[0]._id;
  let bankId = JSON.stringify(bank[0]._id);
  const stringWithoutQuotes = bankId.replace(/"/g, "");
  console.log(stringWithoutQuotes);

  const Accresult = await bankAccount.findById(stringWithoutQuotes);

  return { result, Accresult };
};

exports.patchEmployeeServiceById = async (employeeId, patchData) => {
  console.log(employeeId, patchData.salary);

  const currentBalance = await companyAccInfo.find({});
  let updatedBalance =
    parseInt(currentBalance[0].companyBalance) - parseInt(patchData.salary);
  console.log(updatedBalance);
  const comresult = await companyAccInfo.updateOne({
    companyBalance: updatedBalance,
  });

  const result2 = await employee.findById(employeeId);
  console.log(result2.bankAccount.accountNumber);

  const result = await bankAccount.find();
  const bank = result.filter((url) => {
    let id = url?.accountNumber;
    if (
      JSON.stringify(id) === JSON.stringify(result2.bankAccount.accountNumber)
    ) {
      return url;
    }
  });
  // return bank[0]._id;
  let bankId = JSON.stringify(bank[0]._id);
  const stringWithoutQuotes = bankId.replace(/"/g, "");
  console.log(stringWithoutQuotes);

  const res = await bankAccount.updateOne(
    { _id: stringWithoutQuotes },
    { balance: patchData.salary },
    { runValidators: true }
  );

  const res2 = await employee.updateOne(
    { _id: employeeId },
    { status: "Paid" },
    { runValidators: true }
  );
  return res;
};
