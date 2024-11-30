const comprobarID = function (req, res, next) {
    const id = req.query.id;
    if (id !== undefined) {
        next();
    } else {
        res.status(401).send("No se ha enviado un id");
    }
};

module.exports = comprobarID;