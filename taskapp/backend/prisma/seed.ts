import { PrismaService } from "../src/prisma/prisma.service"

const prisma = new PrismaService();

const main = async () => {
  const todo = await prisma.todo.create({
    data: {
      title: "test todo",
      labels: {
        create: {
          name: "test",
          color: "#fffffb",
        }
      }
    },
    include: {
      labels: true,
    },
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
