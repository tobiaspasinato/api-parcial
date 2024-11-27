const extress = require('express');
const router = extress.Router();

const ObraDeArte = require('../entity/obraArteEntity');

const cors = require("cors");
router.use(cors());

const upload = require('../storage/storage.js');

const { middle_POST, middle_PUT, comprobarID } = require("../middleware/obraArte_middle.js");

router.post('/create', upload.single("obra"), middle_POST, async (request, response) => {
    const nombre = request.body.nombre;
    const anioDeCreacion = request.body.anioDeCreacion;
    const tipo = request.body.tipo;
    const imagen = request.file.filename;
    try {
        const result = await ObraDeArte.create({
            nombre: nombre,
            anioDeCreacion: anioDeCreacion,
            tipo: tipo,
            imagen: imagen
        });
        response.status(201).render("mensaje", { mensaje: "se a creado correctamente" });
    } catch (error) {
        response.status(401).send(error);
    }
});

router.get('/list', async (request, response) => {
    const obras = await ObraDeArte.findAll(
        {
            where: { activo: true },
        }
    );
    response.render("obras", { obras: obras });
});

router.put('/update/:id', middle_PUT, async (request, response) => {
    const id = request.params.id;
    const nombre = request.body.nombre;
    const anioDeCreacion = request.body.anioDeCreacion;
    const tipo = request.body.tipo;
    try {
        const result = await ObraDeArte.update({
            nombre: nombre,
            anioDeCreacion: anioDeCreacion,
            tipo: tipo
        }, {
            where: { id: id }
        });
        response.status(201).render("mensaje", { mensaje: "se a actualizado correctamente" });
    } catch (error) {
        response.status(401).send(error);
    }
});

router.delete('/delete/:id', comprobarID, async (request, response) => {
    const id = request.params.id;
    try {
        const result = await ObraDeArte.update({
            activo: false
        }, {
            where: { id: id }
        });
        response.status(201).render("mensaje", { mensaje: "se a eliminado correctamente" });
    } catch (error) {
        response.status(401).send(error);
    }
});

router.patch('/restore/:id', comprobarID, async (request, response) => {
    const id = request.params.id;
    try {
        const result = await ObraDeArte.update({
            activo: true
        }, {
            where: { id: id }
        });
        response.status(201).render("mensaje", { mensaje: "se a restaurado correctamente" });
    } catch (error) {
        response.status(401).send(error);
    }
});

module.exports = router;