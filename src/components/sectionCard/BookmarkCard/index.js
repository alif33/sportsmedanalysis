import Image from "next/image";
import Link from "next/link";
import React from "react";
import AlartIcon from "../../svg/AlartIcon";
import DeleteIcon from "../../svg/DeleteIcon";
import SaveIcon from "../../svg/SaveIcon";
import style from "./BookmarkCard.module.css";

const BookmarkCard = () => {
  return (
    <Link href="/">
      <a className={style.bookmarkCard}>
        <div className={style.bookmarkCardImg}>
          <Image
            height="333"
            width="486"
            src="/images/card-img/bookmark.png"
            alt=""
          />
        </div>
        <div className={style.bookmarkCardContent}>
          <div className="d-flex align-items-center justify-content-between">
            <h4>
              Davante Adams <SaveIcon />
            </h4>
            <DeleteIcon />
          </div>
          <p>I found this cup on the internet, and it .....</p>
          <span>
            <AlartIcon /> Saved 2 Days Ago
          </span>
        </div>
      </a>
    </Link>
  );
};

export default BookmarkCard;
