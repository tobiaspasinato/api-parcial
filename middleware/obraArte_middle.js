const middle_POST = function (req, res, next) {
    const nombre = req.body.nombre;
    //const anioDeCreacion = req.body.anioDeCreacion; linea original (el problema era que el postman lo manda como string)
    const anioDeCreacion = Number(req.body.anioDeCreacion); //Lo acabo de cambiar
    const tipo = req.body.tipo;
    if (typeof nombre !== "string" || !Number.isInteger(anioDeCreacion) || (tipo !== "pintura" && tipo !== "escultura")) {
        res.status(401).send("Error en los datos enviados");
    } else {
        next();
    }
};

const middle_PUT = function (req, res, next) {
    const id = parseInt(req.params.id, 10);
    const nombre = req.body.nombre;
    const anioDeCreacion = req.body.anioDeCreacion;
    const tipo = req.body.tipo;
    if (!Number.isInteger(id) || typeof nombre !== "string" || !Number.isInteger(anioDeCreacion) || (tipo !== "pintura" && tipo !== "escultura")) {
        res.status(401).send("Error en los datos enviados");
    } else {
        next();
    }
};

const comprobarID = function (req, res, next) {
    const id = req.params.id;
    if (typeof id !== "number") {
        res.status(401).send("Error en los datos enviados");
    } else {
        next();
    }
};

module.exports = {
    middle_POST,
    middle_PUT,
    comprobarID
};