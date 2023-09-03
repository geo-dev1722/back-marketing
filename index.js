import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import db from "./models/db.js";

const app = express();

app.use(express.json())

// Configura CORS para permitir solicitudes desde http://127.0.0.1:5500
app.use(
  cors({
    origin: "http://127.0.0.1:5500" ||"https://richarddangoud.com/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

// Importa la conexión a la base de datos
db.connect()
  .then(() => {
    console.log("Conexión exitosa a la base de datos");

    // Agrega las rutas al middleware de Express
    app.use(router);

    // Inicia el servidor
    app.listen(3000, () => {
      console.log("Servidor en funcionamiento en el puerto 3000");
    });
  })
  .catch((error) => {
    console.error("Error de conexión a la base de datos:", error);
  });
