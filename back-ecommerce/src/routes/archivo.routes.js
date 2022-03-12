import { Router } from "express";
import { crearArchivo } from "../controllers/archivo.controller.js";

export const archivoRouter = Router();

archivoRouter.route("/archivo").post(crearArchivo);
