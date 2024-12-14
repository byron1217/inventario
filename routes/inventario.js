const express = require("express");
const {obtenerInventario, crearHerramienta,obtenerHerramientaPorId, modificarHerramientaPorId} = require("../controllers/inventario");
const router = express.Router()


router.get("/",obtenerInventario);
router.post("/", crearHerramienta)
router.get("/:id",obtenerHerramientaPorId)
router.put("/:id",modificarHerramientaPorId)

module.exports = router;