const jwt = require("jsonwebtoken");
const { isValidAdmin } = require("../config/aws");

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (!isValidAdmin(username, password)) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });

  res.json({ token, message: "Login successful" });
};
