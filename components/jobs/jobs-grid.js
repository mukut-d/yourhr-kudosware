import JobItem from "./job-item";
import classes from "./jobs-grid.module.css";

export default function JobsGrid({ jobs }) {
  return (
    <ul className={classes.meals}>
      {jobs?.map((job) => (
        <li key={job.id}>
          <JobItem {...job} />
        </li>
      ))}
    </ul>
  );
}
