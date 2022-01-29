import { TipoProductoService } from "../services/tipoProducto.service";

export async function crearTipoProducto(req, res) {
  const resultado = TipoProductoService.crearTipoProducto({
    nombreProducto: "",
    usuarioId: "",
  });

  return res.json(resultado);
}
