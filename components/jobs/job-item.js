import Link from "next/link";
import Image from "next/image";
import img from "@/assets/software-engineer.jpg";

import classes from "./job-item.module.css";

export default function JobItem({ title, slug, image, summary, creator }) {
  console.log("img", img);

  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={img} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/jobs/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
