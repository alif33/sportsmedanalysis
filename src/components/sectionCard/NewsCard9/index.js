import React from "react";
import style from "./NewsCard9.module.css";
import Link from "next/link";

const NewsCard9 = ({ _id, slug, title, description, comment }) => {
  return (
    <div className={style.nfl_S5_middle_card}>
        <Link href={`/${ slug }/${ _id }`}>
            <a >
                <h4>{title}</h4>
                <p>
                {description}{" "}
                <span
                    style={{ content: "url(/images/landing_Page/comment.svg)" }}
                    className={style.nfl_comment_num}
                ></span>{" "}
                <span>{comment}</span>
                </p>
            </a>
        </Link>
    </div>
  );
};

export default NewsCard9;
