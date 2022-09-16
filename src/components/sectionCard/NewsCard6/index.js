import React from "react";
import style from "./NewsCard6.module.css";
import Image from "next/image";
import Link from "next/link";

const NewsCard6 = ({ _id, slug, title, img, description }) => {
  const _image = img.split("upload");
  return (
    <div className={style.newscard6}>
      <Link href={`/${slug}/${_id}`}>
        <a>
          <Image
            height="162"
            width="235"
            src={`${_image[0]}/upload/c_thumb,g_face,h_324,w_470/${_image[1]}`}
            className="w-100"
            alt={title}
          />
          <h5 className={`${style.nfl_para1} text-white`}>{title}</h5>
          <p className={style._smd_bf_card_desc}>{description}</p>
        </a>
      </Link>
    </div>
  );
};

export default NewsCard6;
