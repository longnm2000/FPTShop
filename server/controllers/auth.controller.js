const moment = require("moment");
const authService = require("../services/auth.service");
module.exports.signup = async (req, res) => {
  let { name, birthday, gender, phone, email, password, is_login } = req.body;
  console.log(birthday);
  const formattedBirthday = moment(birthday, "YYYY-MM-DDTHH:mm:ss.SSSZ").format(
    "YYYY-MM-DD"
  );
  console.log(name, formattedBirthday, +gender, phone, email, password);
  try {
    await authService.signup(
      name,
      formattedBirthday,
      gender,
      phone,
      email,
      password,
      is_login
    );
    res.status(201).json({
      message: "Sign up successfully",
      status: 201,
    });
  } catch (error) {
    console.error("Error while signing up:", error);
    res.json({
      message: "Failed to sign up",
      error: error.message,
      status: 500,
    });
  }
};

module.exports.signin = async (req, res) => {
  let { email, password } = req.body;
  try {
    let result = await authService.signin(email, password);
    res.json(result);
  } catch (error) {
    res.json({
      message: "Failed to sign in",
      error: error.message,
      status: 500,
    });
  }
};

module.exports.signInAdmin = async (req, res) => {
  let { email, password } = req.body;
  try {
    let result = await authService.signInAdmin(email, password);
    res.json(result);
  } catch (error) {
    res.json({
      message: "Failed to sign in",
      error: error.message,
      status: 500,
    });
  }
};

module.exports.signupAdmin = async (req, res) => {
  let { name, email, password, role } = req.body;
  try {
    await authService.signupAdmin(name, email, password, role);
    res.status(201).json({
      message: "Sign up successfully",
      status: 201,
    });
  } catch (error) {
    console.error("Error while signing up:", error);
    res.json({
      message: "Failed to sign up",
      error: error.message,
      status: 500,
    });
  }
};
