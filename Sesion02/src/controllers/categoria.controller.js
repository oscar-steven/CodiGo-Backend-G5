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
