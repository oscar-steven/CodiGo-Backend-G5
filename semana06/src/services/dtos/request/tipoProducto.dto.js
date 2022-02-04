import validator from "validator";

export function tipoPrudctoDto({ nombre }) {
  if (validator.isEmpty(nombre)) {
    throw Error("El nombre no puede ser vacio");
  }

  return { nombre };
}
