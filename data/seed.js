import { PrismaClient } from "@prisma/client";
import placeholderJobs from "./data.js";

const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    placeholderJobs.map(async (job) => {
      await prisma.job.upsert({
        where: {
          slug: job.slug,
        },
        update: job,
        create: job,
      });
    })
  );
  console.log("successfully seeded");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error while seeding database:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
