import Prisma from "@prisma/client";
import adminSeed from "./seeds/adminseed.js";

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

async function main() {
  await Promise.all([adminSeed(prisma)]);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
