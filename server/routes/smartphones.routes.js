const express = require("express");
const router = express.Router();
const {
  findAllLimit,
  findAll,
  findOne,
  findImg,
  findColStoQuaPri,
  findAllImgs,
  remove,
  findAllBrands,
  create,
} = require("../controllers/smartphone.controller");
router.get("/newest-smartphones-limit", findAllLimit);
router.get("/", findAll);
router.get("/brands", findAllBrands);
router.get("/images/:id", findImg);
router.get("/all-images", findAllImgs);
router.get("/ColStoQuaPri/:id", findColStoQuaPri);
router.get("/:id", findOne);
router.delete("/:id", remove);
router.put("/:id");
router.post("/", create);

module.exports = router;
