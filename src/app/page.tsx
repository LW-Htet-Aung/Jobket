import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobListItem from "@/components/JobListItem";
import { getApprovedJobs } from "@/database/action/job";

export default async function Home() {
  const jobs = await getApprovedJobs()
  throw new Error('error')
  return (
    <main className="main">
      <div className="space-y-5 mb-4 text-center">
        <h1 className="header-1">
          Developer Jobs
        </h1>
        <p className="text-muted-foreground">Find Your Dream Job</p>
      </div>
      <section className="flex flex-col md:flex-row gap-4">
        <JobFilterSidebar />
        <div className="space-y-4 flex-grow">
          {jobs.map(job => (
            <JobListItem key={job.id} job={job} />
          ))}
        </div>
      </section>
    </main>
  );
}
