import Link from "next/link";
import classes from "./page.module.css";
import { Suspense } from "react";
import { getJobs } from "@/lib/jobs.js";
import JobsGrid from "@/components/jobs/jobs-grid";
// import JobsLoadingage from "./loading-out";

async function Job() {
  const jobs = await getJobs();
  // console.log("jobs", jobs);

  return <JobsGrid jobs={jobs} />;
}

export default function JobsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Exciting careers, crafted{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Explore job opportunities that match your skills and take your career
          to the next level. Finding your dream job has never been easier!
        </p>
        <p className={classes.cta}>
          <Link href={"/jobs/apply"}>Apply for Your Next Job</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching jobs...</p>}
        >
          <Job />
        </Suspense>
      </main>
    </>
  );
}
