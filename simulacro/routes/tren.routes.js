const extress = require('express');
const router = extress.Router();
const trenSequelize = require('../entity/tren.entity.js');

router.get('/list', async (request, response) => {
    const trenes = await trenSequelize.findAll(
        {
            where: { activo: true },
        }
    );
    response.render("trenes", { trenes: trenes });
});

router.post('/add', async (request, response) => {
    const nombre = request.body.nombre;
    const capacidad = request.body.capacidad;
    try {
        await trenSequelize.create(
            {
                nombre: nombre,
                capacidad: capacidad,
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
    const capacidad = request.body.capacidad;
    try {
        await trenSequelize.update(
            {
                nombre: nombre,
                capacidad: capacidad,
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
        await trenSequelize.update(
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