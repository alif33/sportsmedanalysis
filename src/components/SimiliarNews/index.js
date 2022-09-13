import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./SimilarNews.module.css";

const SimilarNews = (props) => {
  console.log(props);
  return (
    <Link href="/">
      <a className={style.container}>
        <div className={style.cardImg}>
          <Image
            height="110"
            width="180"
            src="/images/card-img/related.png"
            alt=""
          />
          <p className={style.time}>14:58</p>
        </div>
        <div>
          <p className={style.text}>How is the correct solo vlogger</p>
          <p className={style.description}>
            <small>solo vlogger</small>
          </p>
          <div className={style.container}>
            <p className={style.subtitle}>10,0000 listened</p>
            <p className={style.subtitle}>10 Jan 2022</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SimilarNews;
