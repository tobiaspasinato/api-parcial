const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize.js');

const estacionSequelize = sequelize.define("Estacion", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precioEntrada: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    foto: {
        type: DataTypes.STRING,
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

module.exports = estacionSequelize;