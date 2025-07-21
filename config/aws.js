require("dotenv").config();

/**
 * Simulates AWS IAM-like credential check.
 * Used for secure login to the inventory dashboard.
 */

const validAdmin = {
  username: process.env.AWS_ADMIN_USERNAME,
  password: process.env.AWS_ADMIN_PASSWORD,
};

const isValidAdmin = (username, password) => {
  return (
    username === validAdmin.username &&
    password === validAdmin.password
  );
};

module.exports = { isValidAdmin };
