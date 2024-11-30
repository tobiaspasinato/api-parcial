const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize.js');

const trenSequelize = sequelize.define("Tren", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    capacidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
}, {
    timestamps: true,
    createdAt: "creado_en",
});

module.exports = trenSequelize;