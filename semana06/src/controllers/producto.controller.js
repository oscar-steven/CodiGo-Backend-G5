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

export async function devolver(req, res) {
  // 1. req.params
  // producto/1

  // 2 req.query
  // producto'email=e@c.com&nonre
  const { id } = req.params;
  return res.json(resultado);
}

export async function devolverProductos(req, res) {
  const resultado = await ProductoService.listarProductos();
  return res.json(resultado);
}

export async function eliminarProducto(req, res) {
  const { id } = req.params;
  const resultado = await ProductoService.eliminarProducto(+id);

  return res.status(201).json(resultado);
}
