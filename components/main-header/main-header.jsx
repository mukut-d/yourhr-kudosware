import Link from "next/link";
import logoImg from "@/public/logo.jpg";
import classes from "./main-header.module.css";
import Image from "next/image";
import HeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          Your HR
        </Link>

        <nav className={classes.nav}>
          <ul>
            <NavLink href={"/jobs"}>Browse Jobs</NavLink>
            <NavLink href={"/community"}>Jobs Community</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}
