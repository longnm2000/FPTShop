const orderServices = require("../services/order.service");
const moment = require("moment");
module.exports.addNewOrder = async (req, res) => {
  try {
    const {
      userId,
      totalAmount,
      shippingAddress,
      orderTime,
      orderStatus,
      orderDetails,
    } = req.body;
    const convertTime = moment(orderTime).format("YYYY-MM-DD HH:mm:ss");

    const [orderResult] = await orderServices.addOrder(
      userId,
      totalAmount,
      shippingAddress,
      convertTime,
      orderStatus
    );

    const orderId = orderResult.insertId;

    const orderDetailValues = orderDetails.map((item) => [
      orderId,
      item.color_id,
      item.color,
      item.storage_id,
      item.storage,
      item.smartphoneId,
      item.smartphoneName,
      item.image,
      item.quantity,
      item.price,
    ]);

    await orderServices.addOrderDetail(orderDetailValues);

    res.status(200).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Error placing order" });
  }
};

module.exports.findAllOrders = async (req, res) => {
  try {
    let data = await orderServices.findAllOrders();
    let [rows] = data;

    res.json({
      status: "success",
      orders: rows,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

module.exports.findOneOrderDetail = async (req, res) => {
  let { id } = req.params;
  try {
    let data = await orderServices.findOneOrderDetail(+id);
    let [rows] = data;

    res.json({
      status: "success",
      orderDetail: rows,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

module.exports.updateStatus = async (req, res) => {
  let { id } = req.params;
  let { value } = req.body;
  try {
    await orderServices.updateStatus(+value, +id);
    res.status(200).json({
      message: "Update status login successfully",
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};
