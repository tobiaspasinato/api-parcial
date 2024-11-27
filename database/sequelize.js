const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DATA_BASE_NAME,
    process.env.DATA_BASE_USER,
    process.env.DATA_BASE_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        dialect: "mysql",
        port: process.env.MYSQL_PORT
    });

module.exports = sequelize;