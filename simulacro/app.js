const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("dotenv").config();
//console.log(process.env);

//desabilita los cors
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

const ejs = require("ejs");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const sequelize = require("./database/sequelize.js");
const relacionarEntidades = require("./entity/relaciones.js");
relacionarEntidades();

app.get("/", (request, response) => {
    //sequelize.sync({ force: true });
    response.send("estas en el home del servidor.");
});

app.get("/home", (request, response) => {
    response.render("header");
});

const trenRoutes = require('./routes/tren.routes.js');
app.use('/tren', trenRoutes);

const estacionesRoutes = require('./routes/estaciones.routes.js');
app.use('/estaciones', estacionesRoutes);

const indexRoutes = require('./routes/index.routes.js');
app.use('/index', indexRoutes);

const relacionesRoutes = require('./routes/relaciones.routes.js');
app.use('/relaciones', relacionesRoutes);

app.listen(process.env.PORT, () => {
    console.log("Servidor iniciado en el puerto " + process.env.PORT);
});