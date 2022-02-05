import { Router } from "express";
import { crearArchivo } from "../controllers/archivo.controller.js";
import { validarUsuario } from "../utils/validor.js";

export const archivoRouter = Router();

archivoRouter.route("/archivo").post(validarUsuario, crearArchivo);
