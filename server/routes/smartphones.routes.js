const express = require("express");
const router = express.Router();
const {
  findAllLimit,
  findAll,
  findOne,
  findImg,
  findColStoQuaPri,
  findAllImgs,
} = require("../controllers/smartphone.controller");
router.get("/newest-smartphones-limit", findAllLimit);
router.get("/", findAll);

router.get("/images/:id", findImg);
router.get("/all-images", findAllImgs);
router.get("/ColStoQuaPri/:id", findColStoQuaPri);
router.get("/:id", findOne);

module.exports = router;
