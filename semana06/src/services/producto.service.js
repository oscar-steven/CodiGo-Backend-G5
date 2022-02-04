import Prisma from "@prisma/client";
import { prisma } from "../prisma.js";

export class ProductoService {
  static async crearProducto(data) {
    try {
      const nuevoProducto = await prisma.producto.create({ data });
      return { content: nuevoProducto };
    } catch (error) {
      if (error instanceof Prisma.Prisma.PrismaClientKnownRequestError) {
        // el producto ya existe
        // la data es insuficiente
        // la fk del tipo de producto no existe
        // si es que queremos eliminar y ese registro tiene relacion con otra tabla no permitira la eliminacion
        return { message: "Error al crear producto", content: error.message };
      }
    }
  }
}
