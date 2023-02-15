const {
  signupService,
  loginService,
} = require("../services/userInformation.service");
const { generateToken } = require("../utils/token");

exports.signup = async (req, res) => {
  try {
    const result = await signupService(req.body);
    res.status(200).json({
      status: "success",
      message: "Data insert successfully",
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

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        status: "error",
        error: error.message,
      });
    }

    const result = await loginService(username);

    if (!result) {
      return res.status(400).json({
        status: "error",
        error: "no user found please create an account",
      });
    }

    const isPasswordValid = result.comparePassword(password, result.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        status: "error",
        error: "password is not correct",
      });
    }
    if (result.status != "active") {
      return res.status(400).json({
        status: "error",
        error: "account not active",
      });
    }

    const token = generateToken(result);
    const { password: pwd, ...others } = result.toObject();

    res.status(200).json({
      status: "success",
      message: "Data insert successfully",
      data: { result: others, token },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't insert",
      error: error.message,
    });
  }
};
