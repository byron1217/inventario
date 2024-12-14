# proyecto inventario
### inicio del proyecto
abrimos la terminal en la carpeta del proyecto y hacemos el comando npm init

``` 
npm init -y
```
despues instalamos las dependencias
```
npm install express mongoose dotenv cors
```

despues instalamos dependencias de desrrollo

```


npm install --save-dev nodemon
```

abrimos IDE (entorno de desarrollo integrado)
```
code .
```
creamos los archivos

```
touch index.js .env README.md .gitignore
```

dentro del .gitignore escribimos lo siguiente: 

```
node_modules
.env
```

dentro de index.js pusimos el codigo:
```
- const express = require("express"): traemos express desde node_modules para poderlo usar.

- const app = express(): creamos una instancia o una copia de express para usarla en nuestra app.
- PORT = 3000: definimos el puerto que queremos usar.
- app.set("port", PORT): configuramos el puerto en nuestra app.
- app.get("/hola",: definimos una ruta y un verbo http
- (req,res)=>{: creamos una funcion que tiene como parametros req:request y res:responde
- request es lo que recibimos
- response es lo que respondemos
- res.send("hola mundo"): enviamos la respuesta
- app.listen(PORT,()=>{: escucho el puerto y avisame en console.log
- console.log(`listening port ${PORT}`): me confirma de que todo esta bien sin errores. 
- en la carpeta del proyecto desde la terminal creamos lo siguiente.
- mkdir controllers routes models: creamos las carpetas controller routes y models.
- en estas carpetas creamos los documentos en cada una.
- conectamos las rutas en routers.js
# inventario
