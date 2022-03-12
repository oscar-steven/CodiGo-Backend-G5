import { prisma } from "../prisma.js";
import { s3 } from "../s3.js";

export class ArchivoService {
  static async crearArchivo(data) {
    const productoEnctontrado = await prisma.producto.findUnique({
      where: { id: data.productoId },
      select: { imagen: true },
      rejectOnNotFound: true,
    });

    if (productoEnctontrado.imagen !== null) {
      return {
        message:
          "El producto ya tiene una imagen, primero eliminela y luego vuelva a crear el archivo",
      };
    }

    // recibire el id y el contenido que sera una imagen jpg/png
    const path = `archivos/productos/${data.productoId}`;
    const Key = `${path}/${data.filename}.${data.ext}`;
    const url = s3.getSignedUrl("putObject", {
      Key,
      ContentType: data.contentType,
      Bucket: process.env.AWS_BUCKET,
      Expires: +process.env.AWS_SIGNED_EXPIRES_IN,
    });

    // actualizar producto con su informacion de la imagen
    await prisma.producto.update({
      data: { imagen: Key },
      where: { id: data.productoId },
    });

    return url;
  }

  static devolverURL(path) {
    return s3.getSignedUrl("getObject", {
      Key: path,
      Bucket: process.env.AWS_BUCKET,
      Expires: +process.env.AWS_SIGNED_EXPIRES_IN,
    });
  }

  static eliminarArchivo(path) {
    s3.deleteObject(
      { Bucket: process.env.AWS_BUCKET, Key: path },
      (error, data) => {
        if (error) {
          console.log("El error es");
          console.log(error);
        }
        if (data) {
          console.log("la data es");
          console.log(data);
        }
      }
    );
  }
}
