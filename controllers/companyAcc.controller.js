const {
  addBalanceSer,
  updateBalanceSer,
  getBalanceSer,
} = require("../services/companyAcc.service");

exports.addBalance = async (req, res, next) => {
  try {
    const result = await addBalanceSer(req.body);

    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't insert",
      error: error.message,
    });
  }
};

exports.updateBalance = async (req, res, next) => {
  try {
    const result = await updateBalanceSer(req.body);

    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't insert",
      error: error.message,
    });
  }
};

exports.getBalance = async (req, res, next) => {
  try {
    const result = await getBalanceSer(req.body);

    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't insert",
      error: error.message,
    });
  }
};
