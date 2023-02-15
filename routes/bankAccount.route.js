const express = require("express");
const bankAccountController = require("../controllers/bankAccount.controller");
const verifyToken = "../middleware/veryfyToken.js";
const router = express.Router();

router
  .route("/")
  .post(bankAccountController.createBankAccount)
  .get(bankAccountController.getBankAccount);
router
  .route("/:id")
  .patch(bankAccountController.patchbankAccountById)
  .get(bankAccountController.getbankAccountById);

module.exports = router;
