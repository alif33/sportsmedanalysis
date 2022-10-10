import Image from "next/image";
import React from "react";
import style from "./LatestNewsCard.module.css";
import Link from "next/link";
import { imageResize, Sortern } from "../../../../__lib__/helpers/Validator";
import slugify from "slugify";

const LatestNewsCard = ({ item }) => {
  return (
    <Link href={`/${slugify(item.title, "-")}/${item._id}`}>
      <a className={style.latestNewsCard}>
        <div className={style.latestcardimg}>
          <Image
            height="300"
            width="480"
            src={imageResize(item.image, "c_thumb,g_face,h_300,w_480")}
            alt=""
          />
        </div>
        <div className={style.latestNewsContent}>
          <h3>{Sortern(item.title, 9)}</h3>
          <div className="d-flex align-items-center justify-content-between">
            <p>{item._author}</p>
            <p>
              <span>1 Hour Ago</span>
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default LatestNewsCard;
