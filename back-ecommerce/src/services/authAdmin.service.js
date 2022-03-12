import { compareSync } from "bcrypt";
import { prisma } from "../prisma.js";
import jwt from "jsonwebtoken";
export class AuthAdminService {
  static async login({ correo, password }) {
    const usuarioEncontrado = await prisma.administrador.findUnique({
      where: { correo },
      select: { password: true, id: true },
      rejectOnNotFound: true,
    });
    const resultado = compareSync(password, usuarioEncontrado.password);
    if (resultado) {
      return { message: "si es el usuario" };
    } else {
      return { message: "no es el usuario" };
    }
  }
}
