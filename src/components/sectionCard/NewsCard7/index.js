import React from "react";
import Image from "next/image";
import style from "./NewsCard7.module.css";
import Link from "next/link";
import { imageResize, Sortern } from "../../../../__lib__/helpers/Validator";

const NewsCard7 = ({ _id, slug, title, img, description }) => {
  return (
    <Link key={_id} href={`news/${slug}/${_id}`}>
      <a className="mb-1">
        <div className={` ${style.nfl_sec_two_middle}`}>
          <div>
            <h4 className={style.nfl_card_title1}>{Sortern(title, 5)}</h4>
            <p className={style.nfl_card_desc}>{description}</p>
          </div>
          <div>
            <Image
              width="112"
              height="109"
              src={imageResize(img, "c_thumb,g_face,h_333,w_384")}
              alt={title}
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NewsCard7;
