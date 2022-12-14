import React from "react";
import style from "./NavHeader.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const NavHeader = () => {
  const router = useRouter();
  console.log(router.pathname.split("/")[1]);
  return (
    <div className={style.nfl_nav}>
      <ul className={style.nfl_nav_ul}>
        <li
          className={
            router.pathname.split("/")[1] === "newsfeed" ? style.active : ""
          }
        >
          <Link href="/newsfeed">
            <a>NEWS</a>
          </Link>
        </li>

        <li
          className={`nav-item ${style._smd_nav_item} ${
            router.pathname.split("/")[1] === "players" ? style.active : ""
          }`}
        >
          <Link href="/players">
            <a>PLAYERS</a>
          </Link>
        </li>

        <li
          className={`nav-item ${style._smd_nav_item} ${
            router.pathname.split("/")[1] === "teams" ? style.active : ""
          }`}
        >
          <Link href="/teams">
            <a>TEAMS</a>
          </Link>
        </li>

        <li
          className={`nav-item ${style._smd_nav_item} ${
            router.pathname.split("/")[1] === "my-list" ? style.active : ""
          }`}
        >
          <Link href="/my-list">
            <a>MY LIST</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavHeader;
