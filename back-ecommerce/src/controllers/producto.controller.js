import { productoDto } from "../dtos/request/productoDto.js";
import { ProductoService } from "../services/producto.service.js";

export async function crear(req, res) {
  try {
    const data = productoDto(req.body);
    console.log({ data });
    const resultado = await ProductoService.crearProducto(data);
    return res.status(201).json(resultado);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message,
    });
  }
}
export async function ProductoId(req, res) {
  const { id } = req.params;
  const resultado = await ProductoService.obtenerProductoId(id);
  return res.json(resultado);
}
export async function obtenerProdutos(req, res) {
  const resultado = await ProductoService.listarProductos();
  return res.json(resultado);
}
export async function eliminarProducto(req, res) {
  const { id } = req.params;
  const resultado = await ProductoService.eliminarProductoId(+id);
  return res.status(201).json(resultado);
}

// export async function devolver(req, res) {
//   const { id } = req.params;
//   const resultado = await ProductoService.devolverProducto(id);
//   return res.json(resultado);
// }
