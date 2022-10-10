import Image from "next/image";
import React from "react";
import style from "./SinglePageComment.module.css";

const SinglePageComment = ({ fullName, comment }) => {
  return (
    <div className={style.singlePageComment}>
      <div className={style.commentImage}>
        <Image height="48px" width="48px" src="/images/user/user.png" alt="" />
      </div>
      <div className={style.content}>
        <h4>
          {fullName} <span>2 Days Ago</span>
        </h4>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default SinglePageComment;
