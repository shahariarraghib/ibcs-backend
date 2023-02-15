const {
  createBankAccountService,
  getBankAccountService,
  patchbankAccountServiceById,
  getbankAccountServiceById,
} = require("../services/bankAccount.service");

exports.createBankAccount = async (req, res, next) => {
  try {
    const result = await createBankAccountService(req.body);

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

exports.getBankAccount = async (req, res, next) => {
  try {
    const result = await getBankAccountService();

    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't get",
      error: error.message,
    });
  }
};

exports.getbankAccountById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getbankAccountServiceById(id);
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't get",
      error: error.message,
    });
  }
};

exports.patchbankAccountById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await patchbankAccountServiceById(id, req.body);
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't get",
      error: error.message,
    });
  }
};
