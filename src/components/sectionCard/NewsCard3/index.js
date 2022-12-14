import Image from "next/image";
import Link from "next/link";
import React from "react";
import { imageResize, Sortern } from "../../../../__lib__/helpers/Validator";
import style from "./NewsCard3.module.css";

const NewsCard3 = ({ _id, slug, title, img, comment, name }) => {
  return (
    <Link href={`/${slug}/${_id}`}>
      <a className="mb-2 d-inline-block">
        <div className={`d-flex ${style.newscard3}`}>
          <div className={style.newscard3Image}>
            <Image
              height="132"
              width="218"
              src={imageResize(img, "c_thumb,g_face,h_260,w_400")}
              alt={title}
            />
          </div>

          <div className={style.newscard3content}>
            <h4 className={style.newscard3content_heading}>
              {Sortern(title, 10)}
            </h4>{" "}
            <p className={`mt-2 ${style.nfl_comment_num} `}>
              <span className={` ${style.nfl_comment_num_p} `}> {name} </span>
              <div>
                {" "}
                <span
                  style={{ content: "url(/images/landing_Page/comment.svg)" }}
                ></span>{" "}
                <span>{comment}</span>{" "}
              </div>
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NewsCard3;

// https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/woman.jpg
