const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("bd_prog_test", "root", "furyofthestorm", 
    {
        host: "localhost", dialect: "mysql", port: 3306
    });

module.exports = sequelize;