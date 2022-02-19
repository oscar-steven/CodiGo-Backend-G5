import validator from "validator";

export function productoDto({ nombre, precio, tipo, estado }) {
  // nombre no puede estar vacio
  if (validator.isEmpty(nombre)) {
    throw Error("El nombre no puede estar vacio");
  }

  // el precio no puede ser negativo
  if (validator.isDecimal(precio.toString()) && +precio < 0) {
    throw Error("El precio no puede ser negativo");
  }

  //tipo puede ser "ABARROTES", "HIGIENE PERSONAL","OTROS"
  //   if(tipo !== "ABARROTES" || tipo !== "HIGIENE PERSONAL" || tipo !=="OTROS") {
  //     throw Error("El tipo debe ser ABARROTES,HIGIENE PERSONAL, OTROS);
  //   }
  if (tipo !== "ABARROTES" && tipo !== "HIGIENE PERSONAL" && tipo !== "OTROS") {
    throw Error("El tipo debe ser ABARROTES,HIGIENE PERSONAL, OTROS");
  }

  // estado es opcional pero si me lo pasa tiene que ser boolean
  if (estado && !validator.isBoolean(estado)) {
    throw new Error("El estado debe ser true o false");
  }
  return { nombre, precio, tipo, estado };
}
