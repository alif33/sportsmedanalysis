import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";
import slugify from "slugify";
import { Sortern } from "../../../../__lib__/helpers/Validator";
import style from "./TapWatchNewsCard.module.css";

const TapWatchNewsCard = ({ item }) => {
  console.log("videwo", item);
  return (
    <Link href={`/watch/${slugify(item.title, "-")}/${item._id}`}>
      <a className={style.tapNewsCard}>
        <div className={style.latestcardimg}>
          <Image
            height="200"
            width="323"
            src={`https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`}
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
            <h3>{Sortern(item.title, 10)}</h3>
          </div>
          <span>1 Hour Ago</span>
        </div>
      </a>
    </Link>
  );
};

export default TapWatchNewsCard;
