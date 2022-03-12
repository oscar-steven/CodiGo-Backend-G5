import validator from "validator";

export function archivoDto({ productoId, contentType, ext, filename }) {
  if (!validator.isNumeric(productoId.toString())) {
    throw Error("El productoId debe ser numerico");
  }

  if (
    contentType !== "image/png" &&
    contentType !== "image/jpg" &&
    contentType !== "image/jpeg"
  ) {
    throw Error(
      "La contentType solo puede ser: image/jpg, image/png, image/jpeg"
    );
  }

  if (
    !validator.equals(ext, "jpg") &&
    !validator.equals(ext, "png") &&
    !validator.equals(ext, "jpeg")
  ) {
    throw Error("La ext solo puede ser: jpg, png, jpeg");
  }

  if (validator.isEmpty(filename)) {
    throw Error("El filename no puede estar vacio");
  }
  return { productoId, contentType, ext, filename };
}
