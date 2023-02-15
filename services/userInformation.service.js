const user = require("../models/userInformation");

exports.signupService = async (userInfo) => {
  const result = await user.create(userInfo);
  return result;
};

exports.loginService = async (username) => {
  const result = await user.findOne({username});
  return result;
};