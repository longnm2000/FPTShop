const db = require("../utils/database");

module.exports.addOrder = (
  userId,
  totalAmount,
  shippingAddress,
  orderTime,
  orderStatus
) => {
  return db.execute(
    `INSERT INTO orders (user_id, total_amount, shipping_address, order_date, order_status) VALUES (?, ?, ?, ?, ?)`,
    [userId, totalAmount, shippingAddress, orderTime, orderStatus]
  );
};

module.exports.addOrderDetail = (orderDetailValues) => {
  console.log(orderDetailValues);
  const placeholders = orderDetailValues
    .map(() => "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")
    .join(",");
  const values = orderDetailValues
    .flat()
    .map((value) => (value !== undefined ? value : null));

  const sql = `INSERT INTO order_details (order_id, color_id, color_name, storage_id, storage_capacity, smartphone_id, smartphone_name, image_url, quantity, price) VALUES ${placeholders}`;

  return db.execute(sql, values);
};

module.exports.findAllOrders = () => {
  return db.execute(
    `SELECT o.*, u.name AS user_name FROM orders o INNER JOIN users u ON o.user_id = u.user_id  order by order_status, order_date desc`
  );
};
module.exports.findOneOrderDetail = (id) => {
  return db.execute(
    `SELECT
    o.*,
    od.detail_id,
    od.color_id,
    od.color_name,
    od.storage_id,
    od.storage_capacity,
    od.smartphone_id,
    od.smartphone_name,
    od.image_url,
    od.quantity,
    od.price,
    u.name AS user_name
FROM
    orders o
INNER JOIN
    order_details od ON o.order_id = od.order_id
INNER JOIN
    users u ON o.user_id = u.user_id
WHERE
    o.order_id = ?
`,
    [id]
  );
};

module.exports.updateStatus = (value, id) => {
  return db.execute(`UPDATE orders SET order_status = ? WHERE order_id = ?`, [
    value,
    id,
  ]);
};
