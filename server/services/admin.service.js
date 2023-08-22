const db = require("../utils/database");

module.exports.findAll = () => {
  return db.execute("SELECT * FROM admins");
};

module.exports.findOne = (id) => {
  return db.execute("SELECT * FROM admins WHERE admin_id = ?", [id]);
};

module.exports.findOneByEmail = (email) => {
  return db.execute("SELECT * FROM admins WHERE email = ?", [email]);
};

module.exports.create = (name, email, password, role) => {
  return db.execute(
    "INSERT INTO admins(admin_name, email, password, admin_role) VALUES(?,?,?,?)",
    [name, email, password, role]
  );
};

module.exports.remove = (id) => {
  return db.execute("DELETE FROM admins WHERE id = ?", [id]);
};
