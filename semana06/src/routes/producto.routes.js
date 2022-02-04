import { Router } from "express";
import { crear } from "../controllers/producto.controller.js";
import { validarUsuario } from "../utils/validor.js";

export const productoRouter = Router();
productoRouter.route("/product").post(validarUsuario, crear);
