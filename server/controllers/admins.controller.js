const adminService = require("../services/users.service");

module.exports.findAll = async (req, res) => {
  try {
    let data = await adminService.findAll();
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
    let data = await adminService.findOne(id);
    let [rows] = data;
    if (rows.length === 0) {
      res.json({
        message: "Admin not found",
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

  try {
    await adminService.create(email, password);
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
    await adminService.remove(+id);
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
