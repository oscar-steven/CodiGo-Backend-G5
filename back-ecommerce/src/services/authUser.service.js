import { compareSync, hashSync } from "bcrypt";
import { prisma } from "../prisma.js";

export class AuthUserService {
  static async login({ correo, password }) {
    const usuarioEncontrado = await prisma.usuario.findUnique({
      where: { correo },
      select: { password: true, id: true, correo: true },
      rejectOnNotFound: true,
    });

    const resultado = compareSync(password, usuarioEncontrado.password);
    if (resultado) {
      return { message: "si es el usuario", access: true };
    } else {
      return { message: "no es el usuario", access: false };
    }
  }
  static async singup({ correo, password, nombre }) {
    const usuarioEncontrado = await prisma.usuario.findUnique({
      where: { correo },
      select: { correo: true },
      rejectOnNotFound: false,
    });
    console.log({ usuarioEncontrado });
    if (usuarioEncontrado) {
      return { message: "error al crear ya existe", pass: false };
    } else {
      const newpassword = hashSync(password, 5);
      const usuarioNuevo = await prisma.usuario.create({
        data: {
          correo,
          nombre,
          password: newpassword,
        },
      });
      return { message: "usuario creado", pass: true, content: usuarioNuevo };
    }
  }
}
