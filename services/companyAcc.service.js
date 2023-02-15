const companyAccInfo = require("../models/companyAccInfo");

exports.addBalanceSer = async (data) => {
  const result = await companyAccInfo.create(data);
  return result;
};

exports.updateBalanceSer = async (query) => {
  const currentBalance = await companyAccInfo.find({});
  let updatedBalance =
    parseInt(currentBalance[0].companyBalance) +
    parseInt(query?.companyBalance);
  console.log(updatedBalance);

  const result = await companyAccInfo.updateOne({
    companyBalance: updatedBalance,
    baseSalary: query?.baseSalary,
  });
  return result;
};
exports.getBalanceSer = async () => {
  const result = await companyAccInfo.find({});
  return result;
};
