"use server";
import prisma from "@/lib/prisma";
import { jobFilterSchema } from "@/lib/validation";
import { redirect } from "next/navigation";
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

export const filterJobs = async (formData: FormData) => {
  const values = Object.fromEntries(formData.entries());
  const { q, type, location, remote } = jobFilterSchema.parse(values);

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(type !== "all" && { type }),
    ...(location !== "all" && { location }),
    ...(remote && { remote: "true" }),
  });
  console.log(searchParams);
  redirect(`/?${searchParams.toString()}`);
};
export const getDistinctLocation = async () => {
  const distinctLocations = (await prisma.job
    .findMany({
      where: {
        approved: true,
      },
      select: {
        location: true,
      },
      distinct: ["location"],
    })
    .then((locations) => [
      "all",
      ...locations.map(({ location }) => location).filter(Boolean),
    ])) as string[];
  return distinctLocations;
};
