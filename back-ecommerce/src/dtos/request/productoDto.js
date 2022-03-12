import validator from "validator";

export function productoDto({ nombre, precio, tipoProducto, descripcion }) {
  //   if (validator.isEmpty(nombre)) {
  //     throw Error("el nombre del producto esta vacio");
  //   }
  //   if (!validator.isFloat(precio.toString())) {
  //     throw Error("El precio solo puede contener numeros");
  //   }
  //   if (!validator.isNumeric(tipoProducto.toString())) {
  //     throw Error("El tipoProducto debe ser un numero");
  //   }
  return {
    nombre,
    precio: +precio,
    tipoProductoId: +tipoProducto,
    descripcion,
  };
}
