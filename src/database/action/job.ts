"use server";
import prisma from "@/lib/prisma";
export const getApprovedJobs = async () => {
  const jobs = await prisma.job.findMany({
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return jobs;
};

export const filterJobs = async (formData: FormData) => {};
export const getDistinctLocation = async () => {
  const distinctLocations = await prisma.job
    .findMany({
      where: {
        approved: true,
      },
      select: {
        location: true,
      },
      distinct: ["location"],
    })
    .then((locations) =>
      locations.map(({ location }) => location).filter(Boolean)
    );
  return distinctLocations;
};
