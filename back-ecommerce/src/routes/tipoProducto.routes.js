import { Router } from "express";
import {
  crearTipoProducto,
  listarTipoProductos,
} from "../controllers/tipoProducto.controller.js";

export const tipoProductoRouter = Router();

tipoProductoRouter
  .route("/tipoproducto")
  .get(listarTipoProductos)
  .post(crearTipoProducto);
