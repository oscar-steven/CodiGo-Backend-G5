import { Router } from "express";
import { crearCategoria } from "../controller/categoria.controller.js";

export const categoriaRouter = Router();

categoriaRouter
  .route("/categoria")
  .post(crearCategoria)
  .get
  //hacer el get de todas las categorias ordenadas alfabeticamente por el nombre de manera ASC
  // no usar MAP o FILTER, usar los ordenamientos al mongoose
  ()
  .put
  // hacer el put para actualizar la categoria
  ();

categoriaRouter
  .route("/categoria/:id")
  .get
  // traer la categoria con todos sus productos
  ();
