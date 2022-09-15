import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";
import style from './TapWatchNewsCard.module.css';

const TapWatchNewsCard = () => {
  return (
    <Link href="/">
      <a className={style.tapNewsCard}>
        <div className={style.latestcardimg}>
          <Image
            height="200"
            width="323"
            src="/images/nfl-news/latest-card.png"
            alt=""
          />
          <button className={style.playBtn}>
            {" "}
            <FaPlay />{" "}
          </button>
        </div>
        <div className={style.tapNewsCardContent}>
          <div>
            <p>True Gamers</p>
            <h3>Hollinger: The 5 Kevin Durant trades that make</h3>
          </div>
          <span>1 Hour Ago</span>
        </div>
      </a>
    </Link>
  );
};

export default TapWatchNewsCard;
