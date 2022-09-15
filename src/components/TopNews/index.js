import Image from "next/image";
import Link from "next/link";
import React from "react";
import slugify from "slugify";
import { Sortern } from "../../../__lib__/helpers/Validator";
import EyeIcon from "../svg/EyeIcon";
import style from "./TopNews.module.css";

const SimilarNews = ({ post }) => {

  const _image = post.image.split("upload");
  return (
    <Link href={`/${ slugify(post.title, "-") }/${ post._id }`}>
      <a className={style.container}>
        <div className={style.cardImg}>
          <Image
            height="110"
            width="180"
            src={`${_image[0]}/upload/c_thumb,g_face,h_150,w_150/${_image[1]}`}
            alt={ post.title }
          />
        </div>
        <div className={style.content}>
          <p className={style.text}>{ Sortern(post.title, 10) }</p>

          <div className={style.description}>
            <p className={style.subtitle}>
              {" "}
              <EyeIcon /> { post.views }
            </p>
            <p className={style.subtitle}>10 Jan 2022</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SimilarNews;
