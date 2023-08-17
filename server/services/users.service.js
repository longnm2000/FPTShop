const db = require("../utils/database");

module.exports.findAll = () => {
  return db.execute("SELECT * FROM users");
};

module.exports.findOne = (id) => {
  return db.execute("SELECT * FROM users WHERE user_id = ?", [id]);
};

module.exports.findOneByEmail = (email) => {
  return db.execute("SELECT * FROM architect WHERE email = ?", [email]);
};

module.exports.create = (email, password) => {
  return db.execute("INSERT INTO architect(email, password) VALUES(?, ?)", [
    email,
    password,
  ]);
};

module.exports.remove = (id) => {
  return db.execute("DELETE FROM architect WHERE id = ?", [id]);
};
