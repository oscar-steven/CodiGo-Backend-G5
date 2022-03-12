import { Router } from "express";
import {
  crear,
  eliminarProducto,
  obtenerProdutos,
  ProductoId,
} from "../controllers/producto.controller.js";

export const productoRouter = Router();

productoRouter.route("/producto").post(crear);

productoRouter.route("/producto/:id").get(ProductoId).delete(eliminarProducto);

productoRouter.route("/productos").get(obtenerProdutos);
