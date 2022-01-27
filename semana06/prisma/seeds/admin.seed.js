import { prisma } from "@prisma/client";

export default async (prisma) => {
  await prisma.usuario.upsert({
    create: {
      nombre: "Oscar",
      correo: "ophuaman@gmail.com",
      password: "123456",
      tipoUsuario: "ADMIN",
    },
    update: {},
    where: {
      correo: "ophuaman@gmail.com",
    },
  });
};
