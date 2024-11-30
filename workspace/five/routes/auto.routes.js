const express = require('express');
const router = express.Router();
const comprobarID = require('../middleware/middle.js');

// 1:10:00

//router.use(comprobarID); aplica a todas las rutas

router.get('/', comprobarID, (request, response) => {
    response.send('Hello from Five!');
});

router.get('/user', (request, response) => {
    const id = request.query.id;
    response.send("user: " + id);
});

module.exports = router;