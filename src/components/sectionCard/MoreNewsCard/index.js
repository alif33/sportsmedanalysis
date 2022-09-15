import React from "react";
import Image from "next/image";
import style from "./MoreNewsCard.module.css";
import Link from "next/link";
import { imageResize, Sortern } from "../../../../__lib__/helpers/Validator";

const MoreNewsCard = ({ _id, slug, title, img }) => {
  return (
    <div className={style.more_news_card}>
      <Link href={`/${slug}/${_id}`}>
        <a>
          <Image
            height="162"
            width="200"
            src={imageResize(img, "c_thumb,g_face,h_333,w_384")}
            alt={title}
          />
          <p className={style.nfl_card_Desc}>{Sortern(title, 5)}</p>
        </a>
      </Link>
    </div>
  );
};

export default MoreNewsCard;
