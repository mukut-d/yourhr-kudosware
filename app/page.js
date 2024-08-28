// import ImageSlideshow from "@/components/images/image-slideshow";
import Link from "next/link";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>{/* <ImageSlideshow /> */}</div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Jobs for NextLevel Job Seekers</h1>
            <p>Apply Jobs from all over the world</p>
          </div>
          <div className={classes.cta}>
            <Link href={"/community"}>Join the Community</Link>
            <Link href={"/meals"}>Explore Jobs</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Jobs is a platform designed for job seekers to explore
            exciting career opportunities. It&apos;s a space to discover new
            roles, showcase your talents, and connect with employers and other
            professionals in your industry.
          </p>
          <p>
            NextLevel Jobs is a place to discover new career opportunities and
            connect with professionals and employers in your field.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Jobs?</h2>
          <p>
            NextLevel Jobs is a platform designed for job seekers to showcase
            their skills and find the perfect career opportunities. It&apos;s a
            space to explore new roles, connect with top employers, and build
            your professional network.
          </p>
          <p>
            NextLevel Jobs helps you discover exciting career paths and connect
            with other professionals in your industry.
          </p>
        </section>
      </main>
    </>
  );
}
