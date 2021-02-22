import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// prisma.user
//   .create({
//     data: {
//       name: "Thaísa",
//       email: "thaisascastro@gmail.com",
//     },
//   })
//   .then(() => {
//     console.log("Cadastrou!");
//   });

async function main() {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  console.log(users);
}

main();
