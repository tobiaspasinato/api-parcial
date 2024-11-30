const extress = require('express');
const router = extress.Router();
const estacionSequelize = require('../entity/estacion.entity');

router.get('/list', async (request, response) => {
    const estaciones = await estacionSequelize.findAll(
        {
            where: { activo: true },
        }
    );
    response.render("estaciones", { estaciones: estaciones });
});

router.post('/add', async (request, response) => {
    const nombre = request.body.nombre;
    const precioEntrada = request.body.precioEntrada;
    try {
        await estacionSequelize.create(
            {
                nombre: nombre,
                precioEntrada: precioEntrada,
            }
        );
        response.status(200).send("Tren cargado!");
    } catch (error) {
        response.status(404).send("ERROR!");
    }
});

router.put('/update/:id', async (request, response) => {
    const id = request.params.id;
    const nombre = request.body.nombre;
    const precioEntrada = request.body.precioEntrada;
    try {
        await estacionSequelize.update(
            {
                nombre: nombre,
                precioEntrada: precioEntrada,
            },
            {
                where: { id: id },
            }
        );
        response.status(200).send("Tren actualizado!");
    } catch (error) {
        response.status(404).send("ERROR!");
    }
});

router.delete('/delete/:id', async (request, response) => {
    const id = request.params.id;
    try {
        await estacionSequelize.update(
            {
                activo: false,
            },
            {
                where: { id: id },
            }
        );
        response.status(200).send("Tren eliminado!");
    } catch (error) {
        response.status(404).send("ERROR!");
    }
});

module.exports = router;