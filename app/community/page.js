import Image from "next/image";

import jobIcon from "@/assets/icons/job.jpg";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Careers</span>
        </h1>
        <p>
          Join our community and showcase your skills to potential employers!
        </p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={jobIcon} alt="A person working at a desk" />
            <p>Discover & apply for job opportunities</p>
          </li>
          <li>
            <Image
              src={communityIcon}
              alt="A group of professionals networking"
            />
            <p>Connect with like-minded professionals</p>
          </li>
          <li>
            <Image src={eventsIcon} alt="A professional event or conference" />
            <p>Participate in exclusive career events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
