const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("dotenv").config();
//console.log(process.env);

const ejs = require("ejs");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
    response.render("header");
});

const obraArteRoutes = require('./routes/obras.routes.js');
app.use('/obras', obraArteRoutes);

/*
const obraArte = require('./entity/obraArteEntity.js');

app.get('/createBD', async (request, response) => {
    await obraArte.sync({ force: true });
    console.log("Tabla creada");
    response.send("Tabla creada");
});
*/

app.listen(process.env.PORT, () => {
    console.log("Servidor iniciado en el puerto " + process.env.PORT);
});