const db = require("../utils/database");

module.exports.findAll = () => {
  return db.execute("SELECT * FROM users");
};

module.exports.findOne = (id) => {
  return db.execute("SELECT * FROM users WHERE user_id = ?", [id]);
};

module.exports.findOneByEmail = (email) => {
  return db.execute("SELECT * FROM users WHERE email = ?", [email]);
};

module.exports.create = (
  name,
  birthday,
  gender,
  phone,
  email,
  password,
  is_login
) => {
  return db.execute(
    "INSERT INTO users(name, birthday, gender, phone, email, password,is_login) VALUES(?,?,?,?,?,?,?)",
    [name, birthday, gender, phone, email, password, is_login]
  );
};

module.exports.update = (userId, isLogin) => {
  console.log(userId, isLogin);
  return db.execute(
    "UPDATE `db_fpt`.`users` SET `is_login` = ? WHERE (`user_id` = ?)",
    [isLogin, userId]
  );
};

module.exports.remove = (id) => {
  return db.execute("DELETE FROM users WHERE id = ?", [id]);
};
