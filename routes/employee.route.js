const express = require("express");
const employeeController = require("../controllers/employee.controller");
const verifyToken = "../middleware/veryfyToken.js";
const router = express.Router();

router
  .route("/")
  .post(employeeController.createEmployee)
  .get(employeeController.getEmployee);
router
  .route("/:id")
  .delete(employeeController.deleteEmployeeById)
  .patch(employeeController.patchEmployeeById)
  .get(employeeController.getEmployeeById);

module.exports = router;
