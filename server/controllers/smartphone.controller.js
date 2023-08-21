const usersService = require("../services/users.service");
const smartphoneService = require("../services/smartphone.service");

module.exports.findAllLimit = async (req, res) => {
  try {
    const [results] = await smartphoneService.findAllLimit();
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.findAll = async (req, res) => {
  try {
    const [results] = await smartphoneService.findAll();
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.findImg = async (req, res) => {
  let { id } = req.params;
  try {
    const [results] = await smartphoneService.findImg(id);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.findAllImgs = async (req, res) => {
  console.log("kk");
  try {
    const [results] = await smartphoneService.findAllImgs();
    console.log("kk");
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.findColStoQuaPri = async (req, res) => {
  let { id } = req.params;
  try {
    const [results] = await smartphoneService.findColStoQuaPri(id);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.findOne = async (req, res) => {
  let { id } = req.params;
  try {
    let data = await smartphoneService.findOne(id);
    let [rows] = data;
    if (rows.length === 0) {
      res.json({
        message: "Product not found",
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
