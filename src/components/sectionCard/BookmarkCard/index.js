import Image from "next/image";
import Link from "next/link";
import React from "react";
import slugify from "slugify";
import AlartIcon from "../../svg/AlartIcon";
import DeleteIcon from "../../svg/DeleteIcon";
import SaveIcon from "../../svg/SaveIcon";
import style from "./BookmarkCard.module.css";

const BookmarkCard = ({ item }) => {
  return (
    <Link href={`/${slugify(item.title)}/${ item._id }`}>
      <a className={style.bookmarkCard}>
        <div className={style.bookmarkCardImg}>
          <Image
            height="333"
            width="486"
            src={ item.image }
            alt=""
          />
        </div>
        <div className={style.bookmarkCardContent}>
          <div className="d-flex align-items-center justify-content-between">
            <h4>
              { item.title }<SaveIcon />
            </h4>
            <DeleteIcon />
          </div>
          <p>{ item.description }</p>
          <span>
            <AlartIcon /> Saved 2 Days Ago
          </span>
        </div>
      </a>
    </Link>
  );
};

export default BookmarkCard;
