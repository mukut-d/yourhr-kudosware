import Image from "next/image";
import classes from "./page.module.css";
import { notFound } from "next/navigation";
import { getJob } from "@/lib/jobs";
import img from "@/assets/software-engineer.jpg";

export default function JobDetailPage({ params }) {
  const job = getJob(params.jobSlug);

  // console.log("job", job);

  if (!job) {
    notFound();
  }

  job.requirements = job.requirements.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={img} alt={job.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{job.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${job.poster_email}`}>{job.poster}</a>
          </p>
          <p className={classes.summary}>{job.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: job.requirements,
          }}
        ></p>
      </main>
    </>
  );
}
