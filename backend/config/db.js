const { Sequelize } = require("sequelize");

// Change these values to match your local or RDS instance
const sequelize = new Sequelize(process.env.DB_NAME || "ecommerce_db",
                                process.env.DB_USER || "root",
                                process.env.DB_PASS || "root1", {
  host: process.env.DB_HOST || "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;
