const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("dotenv").config();
//console.log(process.env);
//npx express-generator --view=ejs

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


var logger = function (req, res, next) {
    console.log('LOGGED');
    next();
}

app.use(logger);


const autoRoutes = require('./routes/auto.routes.js');
app.use('/auto', autoRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Five!');
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});