const jwt = require("jsonwebtoken");
const adminService = require("../services/admin.service");

module.exports.isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    try {
      const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
      const { id } = decodedToken.data;

      const user = await adminService.findOne(id);

      if (user) {
        next();
      } else {
        res.status(401).json({
          error: "User not found",
        });
      }
    } catch (jwtError) {
      res.status(401).json({
        error: "Authentication failed",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
