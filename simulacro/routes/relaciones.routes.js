const extress = require('express');
const router = extress.Router();

router.get('/', (request, response) => {
    response.send("estas en el home del tren.");
});

module.exports = router;