import { ProductoService } from "../services/producto.service.js";
import { productoDto } from "../services/dtos/request/producto.dto.js";

export async function crear(req, res) {
  try {
    const data = productoDto(req.body);
    const resultado = await ProductoService.crearProducto(data);
    return res.status(201).json(resultado);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
