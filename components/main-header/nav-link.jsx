"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <li>
      <Link
        href={href}
        // className={active}
        className={
          path.startsWith(href)
            ? `${classes.link} ${classes.active}`
            : `${classes.link}`
        }
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
