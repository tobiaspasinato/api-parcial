const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize.js');

const ObraDeArte = sequelize.define("ObraDeArte", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    anioDeCreacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
},{
    timestamps: true,
    createdAt: "creado_en",
},
);

module.exports = ObraDeArte;