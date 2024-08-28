// "use client";

import classes from "./page.module.css";

import JobsFormSubmit from "@/components/jobs/jobs-form-submit";
import ResumePicker from "@/components/jobs/resume-picker";
import shareJob from "@/lib/actions";

export default function ShareMealPage() {
  // const status = useFormStatus();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Apply your <span className={classes.highlight}>favorite jobs</span>
        </h1>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareJob}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Skills</label>
            <textarea
              id="responsiblities"
              name="responsiblities"
              rows="5"
              required
            ></textarea>
          </p>
          <ResumePicker labe={"Your image"} name={"image"} />
          <p className={classes.actions}>
            <JobsFormSubmit />
            {/* <button type="submit">Share Meal</button> */}
          </p>
        </form>
      </main>
    </>
  );
}
