const express = require("express");
const router = express.Router();
const {
  addNewOrder,
  findAllOrders,
  findOneOrderDetail,
  updateStatus,
} = require("../controllers/order.controller");

router.post("/create-order", addNewOrder);
router.get("/", findAllOrders);
router.get("/:id", findOneOrderDetail);
router.patch("/:id", updateStatus);

module.exports = router;
