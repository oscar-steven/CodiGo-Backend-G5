import { prisma } from "../prisma.js";

export class TipoProductoService {
  static async crearTipoProducto({ nombre }) {
    const nuevoTipoProducto = await prisma.tipoProducto.create({
      data: {
        nombre,
      },
    });

    return { content: nuevoTipoProducto };
  }

  static async listaTipoProducto() {
    const listaProductos = await prisma.tipoProducto.findMany();
    return { content: listaProductos };
  }
}
