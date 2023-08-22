const express = require("express");
const router = express.Router();

const { findAll, findOne, update } = require("../controllers/users.controller");
const isAuth = require("../middlewares/auth.middleware");

router.get("/", findAll);

router.get("/:id", findOne);

router.patch("/:id", update);

module.exports = router;
