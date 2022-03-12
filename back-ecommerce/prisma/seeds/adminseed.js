import { hashSync } from "bcrypt";

// export default async function usuarioSeed(prisma) {
//   await prisma.usuario.upsert({
//     create: {
//       nombre: "Eliseo",
//       correo: "eliseonop@gmail.com",
//       password: "123456",
//     },
//     update: {}
//     ,
//     where:{
//         correo: "eliseonop@gmail.com"
//     }
//   });
// }

export default async function (prisma) {
  const password = hashSync("123456", 5);
  await prisma.administrador.upsert({
    create: {
      nombre: "admin",
      correo: "eliseonop@gmail.com",
      password,
    },
    update: {
      password,
    },
    where: {
      correo: "eliseonop@gmail.com",
    },
  });
}
