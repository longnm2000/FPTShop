const express = require("express");
const router = express.Router();

const {
  findAll,
  findOne,
  create,
  update,
  remove,
} = require("../controllers/users.controller");

router.get("/", findAll);

router.get("/:id", findOne);

module.exports = router;
