import React from "react";
import Image from "next/image";
import style from "./TapNewsCard.module.css";
import Link from "next/link";
import { imageResize, Sortern } from "../../../../__lib__/helpers/Validator";
import slugify from "slugify";

const TapNewsCard = ({ item }) => {
  return (
    <Link href={`/${slugify(item.title, "-")}/${item._id}`}>
      <a className={style.tapNewsCard}>
        <div className="latestcardimg">
          <Image
            height="375"
            width="576"
            src={imageResize(item.image, "c_thumb,g_face,h_375,w_576")}
            alt=""
          />
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

export default TapNewsCard;
