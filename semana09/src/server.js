import express, { json } from "express";
import mongoose from "mongoose";
import { categoriaRouter } from "./routes/categoria.routes.js";
import { productoRouter } from "./routes/producto.routes.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(json());

app.use(productoRouter);
app.use(categoriaRouter);

app.listen(PORT, async () => {
  console.log(`Servidor corriendo exitosamente en el puerto ${PORT}`);
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Bd sincronizada exitosamente");
  } catch (error) {
    // console.log("Error al conectarse con la bd ❌");
    console.log(error);
  }
});
