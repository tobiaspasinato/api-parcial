const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const sequelize = require('./db/sequelize.js');

const autoSequelize = require('./entity/autoEntity.js');

app.get('/autobd', async (request, response) => {
    await autoSequelize.sync({ force: true });
    console.log("Tabla creada");
    response.send("Tabla creada");
});

/*

app.get('/bd', async (request, response) => {
    try {
        await sequelize.authenticate();
        response.status(200)
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        response.status(404);
    }
    response.send("Conexión establecida");
});

1:50:16

*/

require("dotenv").config();
console.log(process.env);

const autoRoutes = require('./routes/auto.routes.js');
app.use('/auto', autoRoutes);

app.listen(process.env.PORT, () => {
    console.log(process.env.PORT);
    console.log('App started!');
});