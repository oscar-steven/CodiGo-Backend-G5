import { hashSync } from "bcrypt";

export default async (prisma) => {
  const password = hashSync("Welcome123", 10);

  await prisma.usuario.upsert({
    create: {
      nombre: "Oscar",
      correo: "ophuaman@gmail.com",
      password,
      tipoUsuario: "ADMIN",
    },
    update: {
      password,
    },
    where: {
      correo: "ophuaman@gmail.com",
    },
  });
};
