const {
  createemployeetService,
  getEmployeeService,
  deleteEmployeeServiceById,
  getEmpolyeeServiceById,
  patchEmployeeServiceById,
} = require("../services/employee.service");

exports.createEmployee = async (req, res, next) => {
  try {
    const result = await createemployeetService(req.body);

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

exports.getEmployee = async (req, res, next) => {
  try {
    const result = await getEmployeeService();

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

exports.deleteEmployeeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteEmployeeServiceById(id);
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

exports.getEmployeeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getEmpolyeeServiceById(id);
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

exports.patchEmployeeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await patchEmployeeServiceById(id, req.body);
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
