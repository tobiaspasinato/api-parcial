const extress = require('express');
const router = extress.Router();

const LogSequelize = require('../entity/logEntity.js');

const cors = require("cors");
router.use(cors());

router.get('/', async (request, response) => {
    const logs = await LogSequelize.findAll();
    response.render("logs", { logs: logs });
});

module.exports = router;