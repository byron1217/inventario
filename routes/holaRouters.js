const express = require("express");
const router = express.Router();
const holaController = require("../controllers/holaControllers")

router.get("/test",holaController.holaMUndo)
   
module.exports = router