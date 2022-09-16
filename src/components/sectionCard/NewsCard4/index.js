import Image from "next/image";
import Link from "next/link";
import React from "react";
import { imageResize, Sortern } from "../../../../__lib__/helpers/Validator";
import style from "./NewsCard4.module.css";

const NewsCard4 = ({ _id, slug, title, name, img, comment, description }) => {
  const _image = img.split("upload");
  return (
    <Link href={`/${slug}/${_id}`}>
      <a>
        <div className={`mb-3 ${style.newsCard4}`}>
          <div className="w-100">
            <Image
              height="200"
              width="440"
              src={imageResize(img, "c_thumb,g_face,h_200,w_440")}
              alt={title}
            />
          </div>

          <h3 className="mt-2">{Sortern(title, 10)}</h3>

          {description && <p className={style.nfl_para1}>{description}</p>}

          <p className={`${style.nfl_comment_num} mt-1`}>
            {name}{" "}
            <div>
              <span
                style={{ content: "url(/images/landing_Page/comment.svg)" }}
              ></span>{" "}
              <span className={style.nfl_comment_num}>{comment}</span>
            </div>
          </p>
        </div>
      </a>
    </Link>
  );
};

export default NewsCard4;
