const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize.js');

const autoSequelize = sequelize.define("Auto", {
    patente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    createdAt: 'fecha_creacion'
}
);

module.exports = autoSequelize;