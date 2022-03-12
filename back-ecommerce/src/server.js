import express, { json } from "express";
import morgan from "morgan";
import { authRouter } from "./routes/auth.routes.js";
import { authAdminRouter } from "./routes/authAdmin.routes.js";
import { productoRouter } from "./routes/producto.routes.js";
import { tipoProductoRouter } from "./routes/tipoProducto.routes.js";
import { archivoRouter } from "./routes/archivo.routes.js";

const app = express();

const PORT = 4000;
// definineod rutas

app.use(morgan("dev"));
app.use(json());

app.use(authRouter);
app.use(tipoProductoRouter);
app.use(authAdminRouter);
app.use(productoRouter);
app.use(archivoRouter);
app.listen(PORT, function () {
  console.log("Servidor corriendo exitosamente ✔✔✔✔✔✔", PORT);
});
