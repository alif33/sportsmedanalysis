import Image from "next/image";
import Link from "next/link";
import React from "react";
import { imageResize, Sortern } from "../../../../__lib__/helpers/Validator";
import style from "./NewsCard.module.css";

const NewsCard11 = ({ _id, slug, title, img, description }) => {
  return (
    <Link href={`news/${slug}/${_id}`}>
      <a className={style.news_card}>
        <Image
          src={
            img
              ? imageResize(img, "c_thumb,g_face,h_724,w_1070")
              : "/images/card-img/card-img2.png"
          }
          alt={title}
          height="724"
          width="1070"
        />
        <h3>{Sortern(title, 15)}</h3>
        <p>{Sortern(description, 30)}</p>
      </a>
    </Link>
  );
};

export default NewsCard11;
