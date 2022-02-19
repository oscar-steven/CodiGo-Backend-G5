import { Producto } from "../models/producto.model.js";

export class ProductoService {
  static async crear(data) {
    try {
      //hay 2 formas de guardar valores en la BD
      // Metodo I
      const nuevoProducto = await Producto.create(data);

      //   // Metodo II:
      //   // Primero creamos la instancia pero no se guarda en la BD
      //   const instanciaNuevoProducto = new Producto(data);
      //   // Segundo: una vez que hemos modificados algun valor previo recien guardamos
      //   instanciaNuevoProducto.nombre = "random" + instanciaNuevoProducto.nombre;
      //   // el metodo save es un metodo asincrono y es el encargado de hacer el guardado de la informacion en la bd
      //   await instanciaNuevoProducto.save();

      //   // Metodo III
      //   // si la inserccion sera de uno o varios registros se podra utilizar el metodo insertManu y devolvera un array con todos los elemento agregados a la BD
      //   Producto.insertMany([
      //     { nombre: "Producto 1" },
      //     { nombre: "Producto 2" },
      //     { nombre: "Producto 3" },
      //   ]);

      return nuevoProducto;
    } catch (e) {
      return {
        message: e.message,
      };
    }
  }
}
