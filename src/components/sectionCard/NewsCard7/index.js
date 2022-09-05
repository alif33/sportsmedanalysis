import React from "react";
import Image from "next/image";
import style from "./NewsCard7.module.css";
import Link from "next/link";

const NewsCard7 = ({ _id, slug, title, img, description }) => {
  return (
    <Link key={_id} href={`news/${slug}/${_id}`}>
      <a>
        <div className={`d-flex ${style.nfl_sec_two_middle}`}>
          <div>
            <p className={style.nfl_card_title1}>{title}</p>
            <p className={style.nfl_card_desc}>{description}</p>
          </div>
          <div className="w-75">
            <Image width="112" height="109" src={ img } alt={ title } />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NewsCard7;
