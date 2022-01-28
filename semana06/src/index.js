import express, { json } from "express";
import morgan from "morgan";
import { authRouter } from "./routes/auth.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(json());

// defino mis rutas
app.use(authRouter);
// fin de la definicion

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en el puerto ${PORT}`);
});
