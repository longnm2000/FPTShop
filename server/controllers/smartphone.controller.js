const usersService = require("../services/users.service");
const smartphoneService = require("../services/smartphone.service");
const moment = require("moment");

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
    await smartphoneService.remove(+id);
    res.status(200).json({
      status: "success",
      message: `Delete smartphone with id = ${id} successfully`,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

module.exports.findAllBrands = async (req, res) => {
  try {
    const [results] = await smartphoneService.findAllBrands();
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.create = async (req, res) => {
  let {
    battery,
    brand,
    charge,
    cpu,
    description,
    mainCamera,
    name,
    os,
    ram,
    releaseDate,
    screen,
    selfieCamera,
    sim,
  } = req.body;
  console.log(
    battery,
    brand,
    charge,
    cpu,
    description,
    mainCamera,
    name,
    os,
    ram,
    moment(releaseDate).format("YYYY-MM-DD"),
    screen,
    selfieCamera,
    sim
  );
  try {
    const [results] = await smartphoneService.create(
      name,
      moment(releaseDate).format("YYYY-MM-DD"),
      description,
      brand,
      cpu,
      mainCamera,
      selfieCamera,
      screen,
      battery,
      charge,
      sim,
      ram,
      os
    );
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
