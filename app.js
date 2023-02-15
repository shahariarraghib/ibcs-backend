const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// thard party middleWare
app.use(cors());
app.use(express.json());

// route

const userRoute = require("./routes/userInformation.route");
const bankAccountRoute = require("./routes/bankAccount.route");
const employeeRoute = require("./routes/employee.route");
const companyRoute = require("./routes/companyAccount.route");

app.use("/app/v1/user", userRoute);
app.use("/app/v1/bankaccount", bankAccountRoute);
app.use("/app/v1/employee", employeeRoute);
app.use("/app/v1/company", companyRoute);

app.get("/", (req, res) => {
  res.send("ibcs surver is connected!!");
});

module.exports = app;
