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

app.get("/autitos", (request, response) => {
    const lista_autos = [
        {
            id: 1,
            nombre: "LaFerrari",
            patente: "AA 123 BB",
            
        },
        {
            id: 2,
            nombre: "Fiat 600",
            patente: "AF 138 GF"
        },
        {
            id: 3,
            nombre: "Mercedes Benz AMG GT",
            patente: "AF 184 HS"
        },
        {
            id: 4,
            nombre: "GAS",
            patente: "AF 284 HS"
        },
    ];
    
    response.render("autitos", { array: lista_autos });
});

app.get("/header", (request, response) => {
    response.render("header");
});

app.get("/", (request, response) => {
    response.render("index");
});

app.listen(process.env.PORT, () => {
    console.log('App started!');
});