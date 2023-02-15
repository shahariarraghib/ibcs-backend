const bankAccount = require("../models/bankAccount");

exports.createBankAccountService = async (data) => {
  const result = await bankAccount.create(data);
  return result;
};

exports.getBankAccountService = async (query) => {
  const result = await bankAccount.find(query);
  return result;
};

exports.getbankAccountServiceById = async (id) => {
  const result = await bankAccount.findById(id);
  return result;
};

exports.patchbankAccountServiceById = async (bankAccountId, patchData) => {
  const result = await bankAccount.updateOne(
    { _id: bankAccountId },
    { $set: patchData },
    { runValidators: true }
  );
  return result;
};
