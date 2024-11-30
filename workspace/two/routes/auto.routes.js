const express = require('express');
const router = express.Router();
const autoSequelize = require('../entity/autoEntity.js');

router.get('/', (request, response) => {
    response.send('Estoy en el Main');
    console.log('Estoy en el Main');
});


router.post('/insert', async (request, response) => {
    const patente = request.body.patente;
    const marca = request.body.marca;
    const modelo = request.body.modelo;
    const resultado = await autoSequelize.create({
        patente: patente,
        marca: marca,
        modelo: modelo
    }).then(auto => {
        response.status(201).send(auto);
    }).catch(error => {
        response.status(400).send(error);
    });
    console.log(resultado);
});

router.delete('/delete/:id', async (request, response) => {
    const resultado = await autoSequelize.destroy({
        where: {
            patente: request.params.id
        }
    });
    response.send(resultado);
    console.log(resultado);
    // borra pero da error
});

router.put('/edit/:id', async (request, response) => {
    const resultado = await autoSequelize.update({
        marca: request.body.marca,
        modelo: request.body.modelo
    },
    {
        where: {
            patente: request.params.id
        }
    }).then(auto => {
        response.status(201).send(auto);
    }).catch(error => {
        response.status(400).send(error);
    });
    console.log(resultado);
});

router.get('/list', async (request, response) => {
    try {
        const resultado = await autoSequelize.findAll();
        response.status(200).send(resultado);
    } catch (error) {
        response.status(400)
    const resultado = await autoSequelize.findAll()
    console.log(resultado);
    response.status(200).send(resultado);
    }
});

router.get('/:id', async (request, response) => {
    const resultado = await autoSequelize.findByPk(request.params.id);
    response.status(200).send(resultado);
});

module.exports = router;