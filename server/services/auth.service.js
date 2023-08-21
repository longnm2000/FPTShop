const bcrypt = require("bcrypt");
const usersService = require("./users.service");
const jwt = require("jsonwebtoken");

module.exports.signup = (name, birthday, gender, phone, email, password) => {
  let salt = bcrypt.genSaltSync(10);
  let hashPassword = bcrypt.hashSync(password, salt);

  return usersService.create(
    name,
    birthday,
    gender,
    phone,
    email,
    hashPassword
  );
};

module.exports.signin = async (email, password) => {
  console.log(email, password);
  try {
    let findUser = await usersService.findOneByEmail(email);
    let [rows] = findUser;
    if (rows.length === 0) {
      return {
        status: 404,
        message: "User not found",
      };
    } else {
      let hashPassword = rows[0].password;
      let compare = bcrypt.compareSync(password, hashPassword);

      if (!compare) {
        return {
          status: 401,
          message: "Incorrect password",
        };
      } else {
        let access_token = jwt.sign(
          {
            data: {
              id: rows[0].user_id,
              email: rows[0].email,
              name: rows[0].name,
            },
          },
          process.env.TOKEN_SECRET,
          { expiresIn: 12000 }
        );
        return {
          status: 200,
          message: "Sign in successful",
          access_token,
        };
      }
    }
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
