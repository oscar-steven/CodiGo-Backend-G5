import { prisma } from "../prisma.js";
import { ArchivoService } from "./archivos.service.js";

export class ProductoService {
  static async crearProducto(data) {
    try {
      const nuevoProducto = await prisma.producto.create({
        data,
      });
      return { content: nuevoProducto };
    } catch (error) {
      console.log(error);
      return { message: "error en la creacion" };
    }
  }
  static async obtenerProductoId(id) {
    const producto = await prisma.producto.findUnique({
      where: { id: +id },
      include: { tipoProducto: true },
      rejectOnNotFound: false,
    });

    if (producto === undefined) {
      return {
        message: `No existe este producto con ese id`,
        id: id,
      };
    }

    const productoConImagen = {
      ...producto,
      imagen: ArchivoService.devolverURL(producto.imagen),
    };

    return {
      producto: productoConImagen,
    };
  }
  static async listarProductos() {
    const productos = await prisma.producto.findMany({
      include: { tipoProducto: true },
    });
    const productosIterados = productos.map((producto) => {
      return {
        ...producto,
        imagen: producto.imagen && ArchivoService.devolverURL(producto.imagen),
      };
    });
    return {
      productos: productosIterados,
    };
  }
  static async eliminarProductoId(id) {
    const productoEncontrado = await prisma.producto.findUnique({
      where: { id },
      rejectOnNotFound: true,
      select: { imagen: true },
    });

    if (productoEncontrado.imagen) {
      ArchivoService.eliminarArchivo(productoEncontrado.imagen);
    }

    if (productoEncontrado) {
      const productoEliminado = await prisma.producto.delete({
        where: { id },
      });
      return { producto: productoEliminado };
    } else {
      return { message: "no se encontro" };
    }
  }

  // static async devolverProducto(id) {
  //   const producto = await prisma.producto.findUnique({
  //     where: { id },
  //     rejectOnNotFound: false,
  //   });

  //   if (productoEncontrado === undefined) {
  //     return {
  //       message: `No existe el producto con el id ${id}`,
  //     };
  //   }

  //   return {
  //     producto,
  //   };
  // }
}
