const express = require("express");
const companyAccountController = require("../controllers/companyAcc.controller");

const router = express.Router();

router
  .route("/")
  .post(companyAccountController.addBalance)
  .patch(companyAccountController.updateBalance)
  .get(companyAccountController.getBalance);


module.exports = router;
