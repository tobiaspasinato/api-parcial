const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize.js');

const Log = sequelize.define("Log", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ruta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    metodo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps: true,
    createdAt: "creado_en",
    updatedAt: false,
});

module.exports = Log;