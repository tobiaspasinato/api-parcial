const express = require('express');
const app = express();

require("dotenv").config();
console.log(process.env);

const crypto = require('crypto');

const contrasenia = "123456";
const clave_secreta = process.env.CLAVE_SECRETA;
const algoritmo = "aes-256-cbc";

function encriptar(){
    const vectorDeInilizacion = crypto.randomBytes(16);
    const encriptador = crypto.createCipheriv(algoritmo, clave_secreta, vectorDeInilizacion);
    let encriptado = encriptador.update(contrasenia, 'utf8', 'hex');
    encriptado += encriptador.final("hex");
    console.log(encriptado);
}

function desencriptar(){

}

encriptar();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on http://localhost:3000');
});