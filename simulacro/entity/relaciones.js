const Tren = require('./tren.entity.js');
const Estacion = require('./estacion.entity.js');

function relacionarEntidades(){
    Tren.belongsToMany(Estacion, {through: 'TrenEstacion'});
    Estacion.belongsToMany(Tren, {through: 'TrenEstacion'});
}

module.exports = relacionarEntidades;