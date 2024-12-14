const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require ("dotenv").config();
const holaRoutes = require("./routes/holaRouters");
const inventarioRoutes = require("./routes/inventario");


const app = express();
const PORT = 3000;


app.set("port", PORT);
app.use(express.json())
app.get("/hola",(req,res)=>{
    res.send("hola mundo desde la ruta")
})
app.use("/api/hola",holaRoutes)
app.use("/api/inventario",inventarioRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("conectado a la base de datos"))
.catch((err)=>console.error(err))
app.listen(PORT,()=>{
    console.log(`listening port ${PORT}`)
}) 