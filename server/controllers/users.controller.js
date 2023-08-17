const db = require("../utils/database");
const usersService = require("../services/users.service");

module.exports.findAll = async (req, res) => {
  try {
    let data = await usersService.findAll();
    let [rows] = data;

    res.json({
      status: "success",
      users: rows,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

module.exports.findOne = async (req, res) => {
  let { id } = req.params;
  try {
    let data = await usersService.findOne(id);
    let [rows] = data;
    if (rows.length === 0) {
      res.json({
        message: "User not found",
      });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    res.json({
      error,
    });
  }
};

module.exports.create = async (req, res) => {
  let { email, password } = req.body;
  // validate email, password

  try {
    await usersService.create(email, password);
    res.json({
      message: "Create user successfully",
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

module.exports.update = (req, res) => {
  res.json({
    message: "Update user successfully",
  });
};

module.exports.remove = async (req, res) => {
  let { id } = req.params;

  try {
    await usersService.remove(+id);
    res.json({
      status: "success",
      message: `Delete architect with id = ${id} successfully`,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};
