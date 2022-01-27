import { Prisma } from "../prisma.js";

export const crearCategoria = async (req, res) => {
  // req.body => { nombre : 'Lacteos' }
  const data = req.body;
  const content = await Prisma.categoria.create({ data });
  return res.json({ content });
};

export const listarCategoria = async (req, res) => {
  // retorna un array de todas las categorias encontradas en la base de datois y opcionarlmente le pondremos pasar una condicional (where)
  const categorias = await Prisma.categoria.findMany({});
  return res.json({ content: categorias });
};

export const buscarCategoria = async (req, res) => {
  console.log(req.query);
  const params = req.query;
  // si en los params hay el estado entonces valiar que si su valor es 'true' entonces sera true caso contrario sera false

  if (params.estado) {
    params.estado = params.estado == "true" ? true : false;
  }
  //SELECT * FROM categoria WHERE nombre= 'Lacteos' and estado = TRUE
  const categorias = await Prisma.categoria.findMany({ where: params });

  return res.json({
    content: categorias,
  });
};

export const actualizarCategoria = async (req, res) => {
  const id = +req.params.id;
  try {
    await Prisma.categoria.findUnique({ where: { id: id } });

    const categoriaActualizada = await Prisma.categoria.update({
      data: req.body,
      where: { id: id },
    });

    return res.status(200).json({
      content: categoriaActualizada,
    });
  } catch (error) {
    console.log(error);
    // se disparara el catch cuando no se encuentre la categoria o cuando la informacion a actualizar sea incorrecta
    return res.status(400).json({
      message: "Error al actualizar la categoria",
    });
  }
};
